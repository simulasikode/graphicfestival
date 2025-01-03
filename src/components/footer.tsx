// src/components/GridLayout.tsx

import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const GridLayout: React.FC = () => {
  const bg = useColorModeValue("cardinal.500", "cardinal.500");
  const color = useColorModeValue("white", "anzac.500");

  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <Box as="footer" bg={bg} color={color} px={8} pb={6} position="relative">
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
          <Text textAlign="left" fontWeight="bold" fontSize={"lg"} pt={2}>
            Festival Seni Cetak Grafis:
            <br />
            Trilogia
          </Text>

          <HStack spacing={4} mt={4} mb={2}>
            <Text fontSize={"sm"}>Media Sosial</Text>
          </HStack>
          {/* Grid instagram icons*/}
          <Tooltip label="Instagram" aria-label="Instagram Tooltip">
            <Link href="https://www.instagram.com" isExternal>
              <Icon
                as={FaInstagram}
                fontSize="xl"
                color="pink.100"
                _hover={{ color: "pink.200" }}
              />
            </Link>
          </Tooltip>

          <Tooltip label="Send me an email!" aria-label="Mail Tooltip">
            <Link
              href="mailto:festivalsenicetakgrafis@gmail.com" // Replace with your email
              fontSize="xl"
              color="blue.100"
              _hover={{ color: "blue.200" }}
            >
              <Icon as={FaEnvelope} ml={2} />
            </Link>
          </Tooltip>
        </GridItem>

        {/* Grid item spanning 2 columns */}
        <GridItem colSpan={1} py={2}>
          <Text textAlign="left" fontSize="Lg" fontWeight="bold">
            Festival
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link href="/festival/tentang" _hover={{ color: "cardinal.100" }}>
              Tentang Festival
            </Link>
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link
              href="/festival/krack-profile"
              _hover={{ color: "cardinal.100" }}
            >
              Tentang Krack
            </Link>
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link href="/festival/tim-kerja" _hover={{ color: "cardinal.100" }}>
              Tim Kerja
            </Link>
          </Text>
        </GridItem>
        <GridItem colSpan={3} py={2}>
          <Text textAlign="left" fontSize="Lg" fontWeight="bold">
            Program
          </Text>

          <Text textAlign="left" fontSize="md">
            <Link href="/program/pameran" _hover={{ color: "cardinal.100" }}>
              Pameran
            </Link>
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link href="/program/simposium" _hover={{ color: "cardinal.100" }}>
              Simposium
            </Link>
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link href="/program/publik" _hover={{ color: "cardinal.100" }}>
              Program Publik
            </Link>
          </Text>
          <Text textAlign="left" fontSize="md">
            <Link href="/program/kolaborasi" _hover={{ color: "cardinal.100" }}>
              Kolaborasi
            </Link>
          </Text>
        </GridItem>
        <GridItem colSpan={2} py={2}>
          <VStack align="start">
            <Text textAlign="left" fontSize={"sm"}>
              Diselenggarakan oleh:
            </Text>

            <Link href="https://krackstudio.com" target="_blank">
              <Image src={"/logo4.svg"} alt="logo" width={60} height={100} />
            </Link>
          </VStack>
        </GridItem>

        <GridItem colSpan={3} py={2}>
          <Text textAlign="left" fontSize={"sm"}>
            Didukung oleh:
          </Text>

          <HStack align="start" mt={2} alignItems="center" spacing="5">
            <Link href="https://krackstudio.com" target="_blank">
              <Image src={"/logo1.svg"} alt="logo" width={45} height={100} />
            </Link>
            <Link href="https://krackstudio.com" target="_blank">
              <Image src={"/logo2.svg"} alt="logo" width={250} height={200} />
            </Link>
            <Link href="https://krackstudio.com" target="_blank">
              <Image src={"/logo3.svg"} alt="logo" width={100} height={200} />
            </Link>
          </HStack>
        </GridItem>
      </Grid>
      <Box>
        <Flex justify="space-between" alignItems="center" mt={8}>
          <Text textAlign="left" fontSize={"sm"}>
            &copy; {currentYear}. Krack! printmaking studio
          </Text>
          <Text textAlign="left" fontSize={"sm"}>
            <Link href="/festival/kode-etik" _hover={{ color: "cardinal.100" }}>
              Kode Etik dan Pedoman
            </Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default GridLayout;
