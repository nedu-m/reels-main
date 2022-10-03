import styled from "styled-components";
export const HeaderContainer = styled.section`
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

export const HeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  font-weight: bold;
  margin: 1.9rem auto auto;
  line-height: 1.3;
  padding-top: 2.5rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 3.3rem;
`;

export const HeaderSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  padding-top: 1.6rem;
`;

export const SearchBar = styled.form`
  margin-top: 0;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: auto;
  height: 46.5px;
  padding: 1rem 25px;
  border: none;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: -1.8px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(to right, #f06630 0%, #ca1a1d 100%);
  font-size: 1.1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  &:focus {
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.3);
  }
`;

export const SearchContainer = styled(HeaderContainer)`
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

export const SearchBarWrapper = styled(HeaderWrapper)`
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
