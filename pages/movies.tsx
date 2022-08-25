import { GetServerSideProps } from "next";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

const MovieOverview = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 1rem;
`;

const MovieReleaseDate = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 1rem;
`;

//Define the prop types of the component
type MovieData = {
  data?: {
    results: {
      id: number;
      title: string;
      overview: string;
      release_date: string;
      poster_path: string;
      genres: {
        name: string;
      }[];
    }[];
  };
};

//Render the movie list and image
export default function Movies({ data }: MovieData) {
  return (
    <Container>
      <Title>Popular Movies</Title>
      <Grid>
        {data?.results?.map((movie) => (
          <Movie key={movie.id}>
            <MovieImage>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
              />
            </MovieImage>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieOverview>{movie.overview}</MovieOverview>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
          </Movie>
        ))}
      </Grid>
    </Container>
  );
}

//Set the TMBD Popular Movies API
const { TMBD_POPULAR_URL } = process.env;

//Get Populars movies from TMDB API using GetServerSideProps
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const res = await fetch(`${TMBD_POPULAR_URL}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
