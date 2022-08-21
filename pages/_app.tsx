import "@fontsource/inter";
import React from "react";
import type { AppProps } from "next/app";
import Theme from "../theme/theme";
import GlobalStyle from "@components/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}
