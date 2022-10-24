import Image from "next/image";
import styled from "styled-components";
import {
  ContentWrapper,
  ContentInner,
  CardContainer,
  CardImageWrapper,
  CardImageInner,
  CardImageLink,
} from "@components/MoviePage/Card";
import { SelectButton } from "@components/MoviePage/SelectButton";
import type { trendingProps } from "types/movies";

export default function Trending({ trendingMovies }: trendingProps) {
  //get the ids from the search results
  return (
    <ContainerInner>
      <SelectButton title={"Trending"} />
      <ContentWrapper>
        <ContentInner>
          {trendingMovies.map((movie) => (
            <CardContainer key={movie.id}>
              <CardImageWrapper>
                <CardImageInner>
                  <CardImageLink>
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
                <p>{movie.title}</p>
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
