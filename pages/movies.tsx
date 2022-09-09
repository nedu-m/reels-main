import Head from "next/head";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getTopRatedMovies, getTrendingMovies } from "@pages/api/api";
import SearchHeader from "@components/MoviePage/SearchHeader";
import Trending from "@components/MoviePage/Trending";
import FreeView from "@components/MoviePage/FreeView";

//Define the prop types of the component
type Props = {
  topRatedMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];

  trendingMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};

//Define the component using component composition
export default function Movies({ topRatedMovies, trendingMovies }: Props) {
  return (
    <Container>
      <Head>
        <title>Reels - Movies</title>
        <meta
          name="description"
          content="Reels is a movie website for all the latest movie downloads"
        />
      </Head>
      <SearchHeader />
      <Trending trendingMovies={trendingMovies} />
      <FreeView topRatedMovies={topRatedMovies} />
    </Container>
  );
}

//Get the data from the API using getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const topRatedMovies = await getTopRatedMovies();
  const trendingMovies = await getTrendingMovies();

  return {
    props: {
      topRatedMovies,
      trendingMovies,
    },
  };
};

//Style the component container
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(300px, 3fr));
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 4rem;
  overflow: hidden;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
