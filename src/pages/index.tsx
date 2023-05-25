import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Sidebar from "~/components/Sidebar";
import Hero from "~/components/Hero";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const { data: sessionData } = useSession();
const router = useRouter();

console.log("sessionData",sessionData)
useEffect(() => {
  if (!sessionData) {
    router.push(
      "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
    );
  }
}, [sessionData])


    return (
      <>
        <Head>
          <title>Assetwise</title>
          <meta name="description" content="Assetwise" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-row justify-start bg-white align-middle">
          <Sidebar />
          <Hero />
        </main>
      </>
    );
};

export default Home;



