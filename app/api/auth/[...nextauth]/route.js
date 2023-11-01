import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { conntectToDB } from "@utils/database";

import User from "@models/user";
import Store from "@models/store";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      console.log("profile",profile);
      try {
        await conntectToDB();
        const userExsits = await User.findOne({
          email: profile.email,
        });
        if (!userExsits) {
          const newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            avatar: profile.picture,
          });
          await Store.create({
            owner: newUser._id,
          })
          //TODO: create a new store
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
