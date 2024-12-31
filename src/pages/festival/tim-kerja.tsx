// pages/festival/team-work.tsx
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Head from "next/head";
import { LiaSlashSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";

export default function TeamWork() {
  return (
    <>
      <Head>
        <title>Team Work | Graphic Art Festival</title>
        <meta
          name="description"
          content="Meet the talented team behind the Graphic Art Festival and discover their collaborative efforts."
        />
      </Head>
      <Container maxW="container.xl" mb={8} p={0}>
        {/* Breadcrumb Navigation */}
        <Breadcrumb spacing="8px" py={8} separator={<LiaSlashSolid />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              _hover={{ textDecoration: "none", color: "cardinal.500" }}
            >
              <FaHome size={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/festival"
              _hover={{ textDecoration: "none", color: "cardinal.500" }}
              _activeLink={{
                color: "cardinal.500",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Festival
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              href="/festival/tim-kerja"
              _hover={{ textDecoration: "none", color: "cardinal.500" }}
              _activeLink={{
                color: "cardinal.200",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Tim Kerja
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Page Content */}
      </Container>
    </>
  );
}
