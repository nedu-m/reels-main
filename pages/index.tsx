import type { ReactElement } from "react";
import Layout from "@components/Layout/Layout";

import Head from "next/head";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import Services from "@components/Servicess/Services";
import Subscribe from "@components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reels - Home</title>
        <meta
          name="description"
          content="Reels is a movie website for all the latest movie downloads"
        />
      </Head>
      <Hero />
      <Features />
      <Services />
      <Subscribe />
    </>
  );
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
