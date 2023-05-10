import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Sidebar from "~/components/Sidebar";
import Hero from "~/components/Hero";

const Home: NextPage = () => {
  // const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Assetwise</title>
        <meta name="description" content="Assetwise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row justify-start align-middle bg-white">
        <Sidebar />
        <Hero />
      </main>
    </>
  );
};

export default Home;
