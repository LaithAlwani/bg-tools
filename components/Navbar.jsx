"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  const setUpProviders = async () => {
    const response = await getProviders();

    setProviders(response);
  };

  useEffect(() => {
    setUpProviders();
  }, []);
  return (
    <nav>
      <Link href="/">
        <h3>BGT</h3>
        {/* <Image src='/next.svg' width={48} height={100} /> */}
      </Link>
      <div className="nav-links">
        {session?.user ? (
          <>
            <Link href="create" className="btn btn-outline">
              Create
            </Link>
            <button onClick={() => signOut({ callbackUrl: "/" })} className="btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile"
                priority
                width={48}
                height={48}
                className="rounded"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  className="btn"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}>
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
