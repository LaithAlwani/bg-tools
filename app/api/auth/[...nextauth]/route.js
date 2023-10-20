import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { conntectToDB } from "@utils/database";

import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessoinUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessoinUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await conntectToDB();
        const userExsits = await User.findOne({
          email: profile.email,
        });
        if (!userExsits) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
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
