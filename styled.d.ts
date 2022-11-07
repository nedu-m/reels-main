import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      gray: string;
      primary: string;
      black: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    images: {
      movie: string;
    };
  }
}
