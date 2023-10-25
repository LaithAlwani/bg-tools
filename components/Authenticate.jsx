import { useSession } from 'next-auth/react';

function Authenticate({children}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return session ? <section>{children}</section> : <h1>Please login</h1>;
}

export default Authenticate