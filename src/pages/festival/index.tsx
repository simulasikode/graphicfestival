// pages/festival/index.tsx
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import TeamSection from "@/components/teamsection";
import NextLink from "next/link";
import { FaHome } from "react-icons/fa";

export default function Festival() {
  return (
    <>
      <Head>
        <title>Tentang Festival | Festival Seni Cetak Grafis</title>
        <meta
          name="description"
          content="Learn all about the Graphic Art Festival, its mission, and the incredible experiences it offers."
        />
      </Head>
      <Container maxW="container.xl" mb={8} p={0}>
        <Box pt={8}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb spacing="8px" py={6} separator="/">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                _hover={{ textDecoration: "none", color: "cardinal.500" }}
                _activeLink={{
                  color: "cardinal.500",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <FaHome size={20} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                href="/festival"
                _hover={{ textDecoration: "none", color: "cardinal.500" }}
                _activeLink={{
                  color: "cardinal.200",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Tentang Festival
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        {/*content festival*/}
        <Box>
          <Heading as="h2" size="xl" fontFamily="Basteleur" mb={4}>
            Tentang Festival
          </Heading>
          <Text maxW="container.sm">
            <b>Festival Seni Cetak Grafis “Trilogia”</b> merupakan upaya Krack
            sebagai kelompok pegiat seni cetak grafis untuk merayakan praktik
            dan pengetahuan yang senantiasa berkembang luas dan terepresentasi
            dalam seni cetak grafis. Watak seni cetak grafis yang distributif,
            repetitif, dan reproduktif akan kami jadikan pintu masuk untuk
            membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
          </Text>
          <Text maxW="container.sm" py={2}>
            Seni cetak grafis memiliki sejarah panjang dan kerap digunakan
            sebagai medium penyampai pesan sekaligus alat propaganda isu
            sosial-politik. Medium cetak juga hadir dalam keseharian masyarakat
            hari ini. Ia bisa menjadi gambar kaos yang mengkritisi rezim, hadir
            dalam uang sebagai nilai tukar sehari-hari, hingga muncul sebagai
            poster, bendera, buku dan lain sebagainya. Membicarakan praktik dan
            perkembangan seni cetak grafis sama halnya dengan merefleksikan
            budaya masyarakat. Dari situlah kerja produksi pengetahun seni cetak
            grafis menemukan urgensinya.
          </Text>
        </Box>
        <Box py={8} mb={8}>
          <NextLink href="/festival/tentang" passHref>
            <Button colorScheme="cardinal">Selengkapnya</Button>
          </NextLink>
        </Box>

        <TeamSection />
      </Container>
    </>
  );
}
