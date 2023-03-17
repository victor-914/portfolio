import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <meta name="description" content="web developer" />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
