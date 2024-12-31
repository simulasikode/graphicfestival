// src/components/GridLayout.tsx

import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Tooltip,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const GridLayout: React.FC = () => {
  const bg = useColorModeValue("cardinal.500", "cardinal.500");
  const color = useColorModeValue("white", "white");

  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <Box as="footer" bg={bg} color={color} p={6} position="relative">
      <Grid
        w="full"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(12, 1fr)",
        }} // Creates a 12-column grid
        gap={4} // Sets space between grid items
      >
        {/* Grid item spanning 1 column */}
        <GridItem colSpan={3}>
          <Text textAlign="left" fontWeight="bold" fontSize={"2xl"} pt={2}>
            Festival Seni Cetak Grafis: Trilogia
          </Text>
          <VStack align="start" mt={2}>
            <Text textAlign="left" fontSize={"sm"}>
              Organize by:
            </Text>
            <Link href="https://krackstudio.com" target="_blank">
              <Image src={"/krack.svg"} alt="logo" width={80} height={100} />
            </Link>
          </VStack>
          <Box mt={8} mb={4}>
            <Text fontSize={"sm"}>Social Media</Text>

            <HStack spacing={4} mt={2}>
              <Tooltip label="Instagram" aria-label="Instagram tooltip">
                <IconButton
                  icon={<FaInstagram />}
                  isRound
                  aria-label="Instagram"
                  size="md"
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                />
              </Tooltip>
            </HStack>
          </Box>
          <VStack align="start" mt={8}>
            <Text textAlign="left" fontSize={"sm"}>
              &copy; {currentYear}. Krack! printmaking studio
            </Text>
          </VStack>
        </GridItem>

        {/* Grid item spanning 2 columns */}
        <GridItem colSpan={9} py={2}>
          <Text textAlign="left" fontSize="xl">
            Program
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GridLayout;
