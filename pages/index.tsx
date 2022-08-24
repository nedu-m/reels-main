import Head from "next/head";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import Services from "@components/Servicess/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyReels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Features />
      <Services />
    </>
  );
}
