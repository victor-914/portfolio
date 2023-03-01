import "../styles/globals.css";
import Head from "next/head";
import {Helmet} from "react-helmet";
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WhiteList Technologies</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Enginnner and Communication Technology" />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
