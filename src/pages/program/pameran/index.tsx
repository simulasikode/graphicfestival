// pages/program/pameran/index.tsx

import { useEffect } from "react";
import gsap from "gsap";
import { Box, Divider, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

const markdownFiles = [
  { slug: "pengantar", title: "Pengantar", author: "Agung Kurniawan" },
  {
    slug: "ada-dan-berlipat-ganda",
    title: "Ada dan Berlipat Ganda",
    author: "Febrian Adinata Hasibuan & Sita Magfira",
  },
  {
    slug: "artist-proof",
    title: "Artist Proof",
    author: "Ace House Collective & Britto Wirajati",
  },
  {
    slug: "cetak-aksi",
    title: "Cetak Aksi: Dari Kamar Gelap ke Lapak Terang",
    author: "Khoiril Maqin",
  },
  // Add more files as needed
];

const Pameran = () => {
  // GSAP Animation for the list
  useEffect(() => {
    gsap.fromTo(
      ".list-item",
      { opacity: 0, y: 50 }, // Initial state (invisible, slightly below)
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, // Final state (visible, original position)
    );
  }, []);

  return (
    <Box p={16}>
      <Heading as="h1" fontFamily="Basteleur" size="xl" mb={6}>
        Pameran
      </Heading>
      <Text fontSize="md" mb={4}>
        Explore the various content of the exhibition. Click on any link to view
        details.
      </Text>

      <List spacing={3}>
        {markdownFiles.map((file) => (
          <ListItem key={file.slug} className="list-item">
            <Link href={`/program/pameran/${file.slug}`}>
              <Text
                color="cardinal.500"
                fontWeight="bold"
                _hover={{ textDecoration: "none", color: "cardinal.800" }}
              >
                {file.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {file.author}
              </Text>
            </Link>
            <Divider my={2} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Pameran;
