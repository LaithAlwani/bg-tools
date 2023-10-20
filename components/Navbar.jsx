"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = false;
  const [providers, setProviders] = useState(null);

  const getNewProvider = async () => {
    const response = await getProviders();

    setProviders(response);
  };

  useEffect(() => {
    getNewProvider();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt3">
      <Link href="/" className="flex gap-2 flex-center">
        <h3>BGT</h3>
        {/* <Image src='/next.svg' width={48} height={100} /> */}
      </Link>
      <div className="links">
        {isUserLoggedIn ? (
          <>
            <Link href="create-post">Create Post</Link>
            <button>Sign Out</button>
            <Link href="/profile"></Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)}>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
