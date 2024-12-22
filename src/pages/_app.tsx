import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import customTheme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        {/* Basic Meta Tags */}
        <title>Festival Seni Cetak Grafis: Trilogia</title>
        <meta
          name="description"
          content="Discover the best in graphic art at our international festival. Join exhibitions, workshops, and connect with artists worldwide!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="graphic art, art festival, exhibitions, workshops, creative community"
        />
        <meta name="author" content="Graphic Art Festival" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://festivalsenicetakgrafis.id" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Graphic Art Festival | Explore Creativity"
        />
        <meta
          property="og:description"
          content="Discover the best in graphic art at our international festival. Join exhibitions, workshops, and connect with artists worldwide!"
        />
        <meta property="og:url" content="https://www.graphicartfestival.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.graphicartfestival.com/og-image.jpg"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
