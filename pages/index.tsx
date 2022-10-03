import Hero from "@components/HomePage/Hero/Hero";
import Seo from "@components/Seo/Seo";
import Features from "@components/HomePage/Features/Features";
import Services from "@components/HomePage/Servicess/Services";
import Subscribe from "@components/HomePage/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Seo
        title="Reels - Home"
        description="Reels is a movie website for all the latest movie downloads"
      />
      <Hero />
      <Features />
      <Services />
      <Subscribe />
    </>
  );
}
