import React from "react";
import type { AppProps } from "next/app";
import Theme from "theme/theme";
import GlobalStyle from "styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}
