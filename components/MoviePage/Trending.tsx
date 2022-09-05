import Image from "next/image";
import {
  Container,
  ContainerInner,
  CardContainer,
  CardImageWrapper,
  CardImageInner,
  CardImageLink,
} from "@components/MoviePage/Card";

type Props = {
  trendingMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};

//Define the component and map the data to the component
export default function Trending({ trendingMovies }: Props) {
  return (
    <Container>
      <ContainerInner>
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
      </ContainerInner>
    </Container>
  );
}
