import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
// import { getMovieQuery } from "@pages/api/api";

import {
  HeaderContainer,
  HeaderWrapper,
  SearchBarContainer,
  SearchBar,
  SearchInput,
  SearchButton,
} from "@components/MoviePage/HeaderComponents";

//Set Query API
const QUERY_API = process.env.NEXT_PUBLIC_QUERY_API;

//Make a Movie Query from TMDB API using async/await and limit the results to 4
export const getMovieQuery = async (query: string) => {
  const res = await fetch(`${QUERY_API}${query}&page=1&include_adult=false`);
  const data = await res.json();
  return data.results.slice(0, 4);
};

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Make a search request when the user clicks the search button
  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const results = await getMovieQuery(searchQuery);
    setSearchResults(results);
  };

  //if nothing is typed in the search bar, diable the search button
  const isDisabled = searchQuery.length === 0;

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <SearchBarContainer>
          <SearchBar>
            <label htmlFor="search">
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
            <SearchButton
              type="submit"
              value="Search"
              onClick={handleSearch}
              disabled={isDisabled}
            >
              <FcSearch size={31} />
            </SearchButton>
          </SearchBar>
        </SearchBarContainer>
      </SearchBarWrapper>
    </SearchContainer>
  );
}

const SearchContainer = styled(HeaderContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: -3.5rem 0 0;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin: -2rem 0 0;
  }
`;

const SearchBarWrapper = styled(HeaderWrapper)`
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin: -1.5rem 0 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;
