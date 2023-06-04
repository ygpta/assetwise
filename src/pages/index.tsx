import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "~/components/Sidebar";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Assetwise</title>
        <meta name="description" content="Assetwise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    </>
  );
};

export default Home;
