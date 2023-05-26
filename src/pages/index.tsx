import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  console.log("sessionData", sessionData);
  const { data } = api.user.getUserDetails.useQuery();

  console.log("data", data);

  return (
      <Head>
        <title>Assetwise</title>
        <meta name="description" content="Assetwise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
};

export default Home;
