import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
    };
    fonts: {
      fontFamily: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
