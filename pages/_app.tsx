import "../styles/globals.css";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/breakpoints.scss";
import "../styles/typography.scss";
import "../styles/general.scss";
import "../styles/button.scss";

import Navigation from "../components/shared/nav/Navigation";
import Footer from "../components/shared/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
