import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My portfolio</title>
        <meta name="description" content="web developer" />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
