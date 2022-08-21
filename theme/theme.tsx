import React from "react";
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
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
}

const theme: MyTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ffbc40",
    black: "#111",
    white: "#fff",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1440px",
  },

  fonts: {
    fontFamily: "Inter, sans-serif",
  },
};

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
