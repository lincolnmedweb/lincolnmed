import "../styles/globals.css";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/breakpoints.scss";
import "../styles/typography.scss";

import Navigation from "../components/shared/nav/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
