import Hero from "@components/HomePage/Hero/Hero";
import Features from "@components/HomePage/Features/Features";
import Services from "@components/HomePage/Servicess/Services";
import Subscribe from "@components/HomePage/Subscribe/Subscribe";
import { getTrendingMovies } from "@pages/api/api";
import type { trendingProps } from "types/movies";

export default function Home({ trendingMovies }: trendingProps) {
  return (
    <>
      <Hero trendingMovies={trendingMovies} />
      <Features />
      <Services />
      <Subscribe />
    </>
  );
}

export async function getServerSideProps() {
  const trendingMovies = await getTrendingMovies();
  return {
    props: {
      trendingMovies: trendingMovies.slice(0, 6),
    },
  };
}
