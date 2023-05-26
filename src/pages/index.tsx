import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
// import { useEffect } from "react";
import Hero from "~/components/Hero";
import Sidebar from "~/components/Sidebar";
import { api } from "~/utils/api";
// import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  console.log("sessionData", sessionData);
  const { data } = api.user.getUserDetails.useQuery();

  console.log("data", data);

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
