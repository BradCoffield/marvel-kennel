import "/components/styles/HamburgerStyles.css";
import Page from '../components/Page';
import Head from "next/head";

 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ashley Kunsa</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          async
          defer
          data-website-id="1454574f-a383-4843-8912-947f4eec96f9"
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
