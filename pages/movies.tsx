import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useState, useMemo } from "react";
import { getTopRatedMovies, getTrendingMovies } from "@pages/api/api";
import SearchHeader from "@components/MoviePage/SearchHeader";
import SearchBar from "@components/MoviePage/SearchBar";
import Trending from "@components/MoviePage/Trending";
import TopRated from "@components/MoviePage/TopRated";
import ResultsCard from "@components/MoviePage/ResultsCard";
import ErrorBoundary from "@components/Error/ErrorBoundary";
import type { Movie, topRatedProps, trendingProps } from "types/movies";

//Define the component and map the data to the component
export default function Movies({
  topRatedMovies,
  trendingMovies,
}: topRatedProps & trendingProps) {
  //Set the results of the search query
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  //Pass the search results to the parent component
  const searchProps = (data: Movie[]) => {
    setSearchResults(data);
  };

  return (
    <>
      <Container>
        <SearchHeader />
        <SearchBar searchProps={searchProps} />
        <>
          {searchResults.length === 0 ? (
            <>
              <ErrorBoundary>
                <Trending trendingMovies={trendingMovies} />
                <TopRated topRatedMovies={topRatedMovies} />
              </ErrorBoundary>
            </>
          ) : (
            <ErrorBoundary>
              <ResultsCard searchResults={searchResults} />
            </ErrorBoundary>
          )}
        </>
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
