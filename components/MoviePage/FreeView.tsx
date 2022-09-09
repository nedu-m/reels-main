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

type Props = {
  topRatedMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};

//Define the component and map the data to the component
export default function FreeView({ topRatedMovies }: Props) {
  return (
    <ContainerInner>
      <SelectButton title={"Top Rated"} />
      <ContentWrapper>
        <ContentInner>
          {topRatedMovies.map((movie) => (
            <CardContainer key={movie.id}>
              <CardImageWrapper>
                <CardImageInner>
                  <CardImageLink>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={500}
                      height={750}
                      priority
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
