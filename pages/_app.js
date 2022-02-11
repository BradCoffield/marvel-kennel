import "/components/styles/HamburgerStyles.css";
import Page from '../components/Page';
import Head from "next/head";

 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AAK3</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="stylesheet" href="https://use.typekit.net/hmi2ogn.css" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
