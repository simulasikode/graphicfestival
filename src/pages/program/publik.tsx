import Head from "next/head";
import { Box, Container, Heading } from "@chakra-ui/layout";

export default function Publik() {
  return (
    <>
      <Head>
        <title>Program - Publik</title>
        <meta
          name="description"
          content="Explore our program featuring exhibitions, symposiums, and public events at the Graphic Art Festival."
        />
      </Head>
      <Container maxW={"container.xl"} p={0}>
        <Box as="main" py={20}>
          <Heading fontFamily="Basteleur">Program Publik</Heading>
        </Box>
      </Container>
    </>
  );
}