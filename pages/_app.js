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
        <script
          async
          defer
          data-website-id="969cd4f0-51dc-44f7-890a-0c9f4a0db280"
          src="https://umami-bcoffield.herokuapp.com/umami.js"
        ></script>
        <link rel="stylesheet" href="https://use.typekit.net/hmi2ogn.css" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
