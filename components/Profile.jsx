import { useSession } from "next-auth/react";
import Image from "next/image";
import Authenticate from "./Authenticate";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <Authenticate>
      {session && (
        <>
          <div className="img-wrapper">
            <Image
              src={session.user.image}
              alt="profile"
              priority
              fill={true}
              sizes="100%"
              quality={100}
              className="rounded"
            />
          </div>
          <h1>{session?.user.name}</h1>
          <p>{session?.user.email}</p>
        </>
      )}
    </Authenticate>
  );
};

export default Profile;
