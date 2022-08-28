import { GetServerSideProps } from "next";
import Image from "next/image";
import styled from "styled-components";

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
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderContent>
            <HeaderTitle>Welcome.</HeaderTitle>
            <HeaderSubtitle>
              Here you can find the latest movies from the world of cinema.
            </HeaderSubtitle>
          </HeaderContent>
          <SearchBarContainer>
            <SearchBar>
              <label htmlFor="search">
                <SearchInput type="text" placeholder="Search..." />
              </label>
            </SearchBar>
          </SearchBarContainer>
        </HeaderWrapper>
      </HeaderContainer>
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

//Styling the component

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 3fr));
  width: 100%;
  height: auto;
  margin-top: 4rem;
`;

const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 0;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-content: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  font-weight: bold;
  margin-top: -1.5rem;
  margin: auto;
  line-height: 1.3;
`;

const HeaderTitle = styled.h2`
  font-size: 3.3rem;
`;

const HeaderSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`;

//Search bar
const SearchBarContainer = styled.div`
  width: 100%;
  padding-top: 1.6rem;
`;

const SearchBar = styled.form`
  margin-top: 0;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2.875rem;
  line-height: 2.875rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 1.875rem;
  padding: 0.625rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  outline: none;
  &:focus {
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.3);
  }
`;
