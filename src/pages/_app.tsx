import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import customTheme from "../styles/theme";
import Head from "next/head";
import { ChakraMDXProvider } from "../components/MDXProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Head>
          {/* Basic Meta Tags */}
          <title>Festival Seni Cetak Grafis: Trilogia</title>
          <meta
            name="description"
            content="Festival seni cetak grafis, program pameran seni, simposium seni grafis, lokakarya seni grafis, kolaborasi seni, Sejarah seni grafis, eksplorasi seni grafis, cetak grafis kontemporer."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="Festival seni cetak grafis, program pameran seni, simposium seni grafis, lokakarya seni grafis, kolaborasi seni, Sejarah seni grafis, eksplorasi seni grafis, cetak grafis kontemporer."
          />
          <meta name="author" content="festival seni cetak grafis" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://festivalsenicetakgrafis.id" />

          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="Festival Seni Cetak Grafis | Trilogia"
          />
          <meta
            property="og:description"
            content="Festival seni cetak grafis, program pameran seni, simposium seni grafis, lokakarya seni grafis, kolaborasi seni, eksplorasi seni grafis, cetak grafis kontemporer."
          />
          <meta property="og:url" content="https://www.festivalsenicetak.id" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://festivalsenicetakgrafis.id/images/hero_home.webp"
          />
        </Head>
        <ChakraMDXProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraMDXProvider>
      </ChakraProvider>
    </>
  );
}
