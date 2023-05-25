import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: sessionData } = useSession();

  return (
    <>
      <div>Hello, {sessionData ? sessionData.user.name : null}</div>
    </>
  );
}
