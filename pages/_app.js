import "/components/styles/HamburgerStyles.css";
import Page from '../components/Page';
import Head from "next/head";

 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marvel kennel</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        
      
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
