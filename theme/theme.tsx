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
    gray: string;
    red: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
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
};

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
