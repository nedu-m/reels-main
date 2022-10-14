import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { getTopRatedMovies, getTrendingMovies } from "@pages/api/api";
import Seo from "@components/Seo/Seo";
import MovieHeader from "@components/MoviePage/MovieHeader";
import Search from "@components/MoviePage/Search";
import Trending from "@components/MoviePage/Trending";
import TopRated from "@components/MoviePage/TopRated";
import ResultsCard from "@components/MoviePage/ResultsCard";
import ErrorBoundary from "@components/Error/ErrorBoundary";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { supabaseClient } from "@helper/supabaseClient";

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

//interface for the movie object
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

//Define the component using component composition
export default function Movies({ topRatedMovies, trendingMovies }: Props) {
  //Set the results of the search query
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  //set not found/no-search state
  const [notFound, setNotFound] = useState(false);

  //Pass the search results to the parent component
  const searchData = (data: Movie[]) => {
    setSearchResults(data);
  };

  //if the search results are empty, set the not found state to true
  useEffect(() => {
    if (searchResults.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [searchResults]);

  return (
    <>
      <Container>
        <Seo
          title="Reels - Movies"
          description="Reels is a movie website 
        for all the latest movie downloads"
        />

        <MovieHeader />
        <Search searchProps={searchData} />
        {notFound ? (
          <>
            <ErrorBoundary>
              <Trending trendingMovies={trendingMovies} />
            </ErrorBoundary>

            <ErrorBoundary>
              <TopRated topRatedMovies={topRatedMovies} />
            </ErrorBoundary>
          </>
        ) : (
          <ErrorBoundary>
            <ResultsCard searchResults={searchResults} />
          </ErrorBoundary>
        )}
      </Container>
    </>
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
