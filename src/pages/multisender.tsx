import type { NextPage } from "next";
import Head from "next/head";
import { MultiSenderView } from "../views";
import Footer from "components/Footer";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>SOLANA FANTASY FOOTBALL</title>
        <meta
          name="description"
          content="BRINGING FANTASY FOOTBALL TO WEB 3"
        />
      </Head>
      <MultiSenderView />
      <Footer />
    </div>
  );
};

export default Home;