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
