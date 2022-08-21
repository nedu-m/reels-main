import Head from "next/head";
import Navbar from "@components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyReels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </>
  );
}
