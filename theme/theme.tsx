import { ThemeProvider, DefaultTheme } from "styled-components";

interface Props {
  children: React.ReactNode;
}

interface MyTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    gray: string;
    red: string;
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

const theme: MyTheme = {
  colors: {
    primary: "",
    secondary: "",
    black: "#111",
    white: "#ffffff",
    gray: "#f4f4f5",
    red: "#ac0c06",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
  },
  images: {
    movie: "https://image.tmdb.org/t/p/w500",
  },
};

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
