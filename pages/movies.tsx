import { GetServerSideProps } from "next";
import Image from "next/image";
import styled from "styled-components";
import Header from "@components/MoviePage/Header";
import Popular from "@components/MoviePage/Popular";

//Define the prop types of the component
type MovieData = {
  data: {
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

export default function Movies({ data }: MovieData) {
  return (
    <Container>
      <Header />
      <Popular />
    </Container>
  );
}

//Set the TMBD Popular Movies API
const { TMBD_POPULAR_URL } = process.env;

//Get Populars movies from TMDB API using GetServerSideProps
// export const getServerSideProps: GetServerSideProps = async (_context) => {
//   const res = await fetch(`${TMBD_POPULAR_URL}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

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
