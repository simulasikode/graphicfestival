// pages/festival/index.tsx
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Festival() {
  return (
    <>
      <Head>
        <title>Festival | Graphic Art Festival</title>
        <meta
          name="description"
          content="Learn all about the Graphic Art Festival, its mission, and the incredible experiences it offers."
        />
      </Head>
      <Container>
        <main>
          {/* Breadcrumb Navigation */}
          <Breadcrumb spacing="8px" separator=">">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/festival">Festival</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Page Content */}
          <h1>Welcome to the Graphic Art Festival</h1>
          <p>
            Experience the world of graphic art through exhibitions, workshops,
            and more!
          </p>
        </main>
        <Box as="h2" py={4}>
          <Link href="/festival/team-work">Meet our team</Link>
        </Box>
      </Container>
    </>
  );
}
