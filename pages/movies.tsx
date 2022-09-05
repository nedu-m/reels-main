import Head from "next/head";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getTopRatedMovies, getTrendingMovies } from "@pages/api/api";
import Header from "@components/MoviePage/Header";
import { SelectButton } from "@components/MoviePage/SelectButton";
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

//Define the component
export default function Movies({ topRatedMovies, trendingMovies }: Props) {
  return (
    <Container>
      <Head>
        <title>Reels - Movies</title>
      </Head>
      <Header />
      <ContainerInner>
        <SelectButton />
        <Trending trendingMovies={trendingMovies} />
      </ContainerInner>
      <ContainerInner>
        <SelectButton />
        <FreeView topRatedMovies={topRatedMovies} />
      </ContainerInner>
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

const ContainerInner = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 1rem 0;
  padding: 0 1rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
