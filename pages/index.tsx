import Hero from "@components/Hero/Hero";
import Seo from "@components/Seo/Seo";
import Features from "@components/Features/Features";
import Services from "@components/Servicess/Services";
import Subscribe from "@components/Subscribe/Subscribe";

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
