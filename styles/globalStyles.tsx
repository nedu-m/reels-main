import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default GlobalStyle;
