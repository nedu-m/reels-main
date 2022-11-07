import Image from "next/image";
import { useRouter } from "next/router";
import {
  ContentWrapper,
  ContentInner,
  CardContainer,
  CardImageWrapper,
  CardImageInner,
  CardImageLink,
} from "@components/MoviePage/Card";
import type { resultsProps } from "types/movies";
import styled from "styled-components";

//Define the component and map the data to the component
export default function ResultsCard({ searchResults }: resultsProps) {
  const router = useRouter();

  //handle the click event and pass the query to the url
  function displayMovieDetails(
    id: number,
    title: string,
    poster: string,
    overview: string,
    vote_average: number,
    release_date: string
  ) {
    //Pass the query to the url, check the console.log to see the query
    router.push(
      {
        pathname: "/movie_details/[id]",
        query: {
          id,
          title,
          poster,
          overview,
          vote_average,
          release_date,
        },
      },
      //as - prop is used to change the url in the browser
      `/movie_details/${title.replace(/\s+/g, "-").toLowerCase()}`
    );
  }

  //filter the data to remove movies with no poster,
  const filteredResults = searchResults.filter(
    (result) => result.poster_path !== null
  );

  return (
    <ContainerInner>
      <ContentWrapper>
        <ContentInner>
          {filteredResults.map((movie) => (
            <CardContainer key={movie.id}>
              <CardImageWrapper>
                <CardImageInner>
                  <CardImageLink
                    onClick={() =>
                      displayMovieDetails(
                        movie.id,
                        movie.title,
                        movie.poster_path,
                        movie.overview,
                        movie.vote_average,
                        movie.release_date
                      )
                    }
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={500}
                      height={750}
                      placeholder="empty"
                    />
                    <p>{`https://image.tmdb.org/t/p/w500${movie.poster_path}`}</p>
                  </CardImageLink>
                </CardImageInner>
              </CardImageWrapper>
            </CardContainer>
          ))}
        </ContentInner>
      </ContentWrapper>
    </ContainerInner>
  );
}

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
