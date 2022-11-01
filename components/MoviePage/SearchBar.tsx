import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getMovieQuery } from "@pages/api/api";

import {
  HeaderContainer,
  HeaderWrapper,
  SearchBarContainer,
  Search,
  SearchInput,
  SearchButton,
} from "@components/MoviePage/Header";

//set search props type to id, title, poster_path as void function
type SearchProps = (
  data: { id: number; title: string; poster_path: string }[]
) => void;

export default function SearchBar({
  searchProps,
}: {
  searchProps: SearchProps;
}) {
  //Set the state of the search query
  const [searchQuery, setSearchQuery] = useState("");
  //Set the state of the movie query
  const [searchMovie, setSearchMovie] = useState([]);

  //Make a search request when the user clicks the search button
  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const results = await getMovieQuery(searchQuery);
    setSearchMovie(results);
  };

  //Pass the search results to the parent component
  useEffect(() => {
    searchProps(searchMovie);
  }, [searchProps, searchMovie]);

  //If nothing is typed in the search bar, diable the search button
  const isDisabled = searchQuery.length === 0;

  //On enter key press, make a search request and set the type of event to any
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <SearchBarContainer>
          <Search>
            <label htmlFor="search">
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
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
          </Search>
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
