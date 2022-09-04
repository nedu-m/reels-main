import { GetServerSideProps } from "next";
import styled from "styled-components";
import Header from "@components/MoviePage/Header";
import Popular from "@components/MoviePage/Popular";
import Card from "@components/MoviePage/Card";

//Define the prop types of the component
type MovieData = {
  data: {
    map(arg0: (movie: any) => JSX.Element): [];
    results: {
      id: number;
      title: string;
      poster_path: string;
      release_date: string;
      overview: string;
      backdrop_path: string;
    };
  };
};

export default function Movies({ data }: MovieData) {
  return (
    <Container>
      <Header />
      <PopularContainer>
        <Popular />
        <Card data={data} />
      </PopularContainer>
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
      data: data.results,
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

const PopularContainer = styled.section`
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
