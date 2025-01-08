import { useEffect, useRef } from "react";
import { Box, Text, SimpleGrid, Link } from "@chakra-ui/react";
import { gsap } from "gsap";

const HoverCard = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Array of titles for each card
  const cardTitles = [
    "Pameran",
    "Simposium",
    "Program Publik",
    "Program Kolaborasi",
  ];

  // Array of descriptions for each card
  const cardDescriptions = [
    "Seni cetak grafis adalah jejalin dari paradigma seni grafis dan seni cetak. Seni grafis sendiri adalah sebuah metode penciptaan seni dengan menggunakan media garis dengan seluruh elaborasi.",
    "Hasil riset Krack! Printmaking Collective sepanjang 2022-2023 menunjukkan bahwa seni cetak grafis memiliki sejarah panjang perkembangannya di Indonesia.",
    "Program Publik Festival Seni Cetak Grafis ‘Trilogia’ dirancang untuk melibatkan publik secara langsung melalui dua kegiatan utama: Aktivasi Pameran dan Aktivasi Studio.",
    "Salah satu perluasan dari rangkaian kegiatan Festival Seni Cetak Grafis “Trilogia” adalah Program Kolaborasi. ",
  ];

  // Array of links for each card
  const cardLinks = [
    "/program/pameran",
    "/program/simposium",
    "/program/publik",
    "/program/kolaborasi",
  ];

  // Array of dynamic background colors for each card
  const cardColors = [
    "cardinal.100", // Blue
    "anzac.100", // Green
    "gray.100", // Orange
    "green.100", // Purple
  ];

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        // Hover effect using GSAP
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05, // Slightly enlarge the card
            rotation: 5, // Rotate the card slightly
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Add shadow on hover
            duration: 0.3, // Duration of animation
            ease: "power1.out", // Smooth easing
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1, // Reset scale to 1
            rotation: 0, // Reset rotation
            boxShadow: "none", // Remove shadow
            duration: 0.3, // Duration of animation
            ease: "power1.out", // Smooth easing
          });
        });
      }
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
      spacing="32px"
      px={6}
      mt={32}
    >
      {cardTitles.map((title, index) => (
        <Link
          href={cardLinks[index]}
          key={index}
          _hover={{ textDecoration: "none" }}
        >
          <Box
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            borderRadius="md"
            overflow="hidden"
            bg={cardColors[index]} // Dynamic color based on index
            cursor="pointer"
            height="280"
            m="auto" // Centering the cards horizontally
            position="relative"
            boxShadow="md" // Shadow to create depth
            transition="box-shadow 0.3s ease, transform 0.3s ease"
          >
            <Box bg={cardColors[index]} />
            <Box padding="4">
              <Text fontSize="xl" fontWeight="bold">
                {title}
              </Text>{" "}
              {/* Dynamic title */}
              <Text mt="2">{cardDescriptions[index]}</Text>{" "}
              {/* Dynamic description */}
            </Box>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default HoverCard;
