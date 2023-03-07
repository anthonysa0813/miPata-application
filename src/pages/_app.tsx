import "../styles/normalize.css";
import "../../style.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "animate.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
