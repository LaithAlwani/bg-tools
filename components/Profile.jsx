import { useSession } from 'next-auth/react';
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1>loading...</h1>;
  }
  return session ? (
    <section>
      <div className="img-wrapper">
        <Image
          src={session.user.image}
          alt="profile"
          priority
          fill={true}
          sizes='100%'
          quality={100}
          className="rounded"
        />
      </div>
      <h1>{session?.user.name}</h1>
      <p>{session?.user.email}</p>
    </section>
  ) : (
    <h1>please log in</h1>
  );
}

export default Profile