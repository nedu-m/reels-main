import type { AppProps } from "next/app";
import Theme from "theme/theme";
import GlobalStyle from "styles/globalStyles";
import Layout from "@components/Layout/Layout";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}
