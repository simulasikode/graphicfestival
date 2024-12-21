import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for Hamburger and Close
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid"; // Heroicons for Dark Mode toggle

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle }: { isOpen: boolean; onToggle: () => void } =
    useDisclosure();

  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.800", "gray.200");
  const hoverColor = useColorModeValue("primary.500", "primary.300");
  const iconSize = 20; // Set consistent icon size

  const links = [
    { label: "Festival", href: "/festival" },
    { label: "Schedule", href: "/schedule" },
    { label: "Program", href: "/program" },
  ];

  return (
    <Box
      as="header"
      bg={bg}
      color={color}
      w="100%"
      px={6}
      py={4}
      shadow="sm"
      zIndex="sticky"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        {/* Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Link href="/" _hover={{ color: hoverColor }}>
            Festival Seni Cetak Grafis
          </Link>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          aria-label="Toggle Navigation"
          icon={
            isOpen ? <FaTimes size={iconSize} /> : <FaBars size={iconSize} />
          }
          display={{ base: "flex", md: "none" }}
          onClick={onToggle} // Toggle the menu open/close
          variant="ghost"
        />

        {/* Desktop Navigation and Icons */}
        <HStack
          spacing={4}
          as="nav"
          display={{ base: "none", md: "flex" }}
          align="center"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontWeight="medium"
              _hover={{ color: hoverColor }}
            >
              {link.label}
            </Link>
          ))}

          {/* Instagram Icon */}
          <Link href="https://instagram.com/festivalsenicetakgrafis" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram size={iconSize} />}
              ml={16}
              variant="ghost"
              _hover={{ color: hoverColor }}
            />
          </Link>

          {/* Dark Mode Toggle */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <MoonIcon style={{ width: iconSize, height: iconSize }} />
              ) : (
                <SunIcon style={{ width: iconSize, height: iconSize }} />
              )
            }
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ color: hoverColor }}
          />
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {/*igno*/}
      <Box
        display={isOpen ? "flex" : "none"}
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        zIndex={1000}
        transition="all 0.3s ease-in-out"
      >
        <VStack spacing={8} color={color} textAlign="center">
          {/* Menu Links */}
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontWeight="bold"
              fontSize="xl"
              _hover={{ color: hoverColor }}
            >
              {link.label}
            </Link>
          ))}

          {/* Instagram Icon in Mobile Menu */}
          <Link href="https://instagram.com" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram size={iconSize} />}
              variant="ghost"
              _hover={{ color: hoverColor }}
            />
          </Link>

          {/* Dark Mode Toggle in Mobile Menu */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <MoonIcon style={{ width: iconSize, height: iconSize }} />
              ) : (
                <SunIcon style={{ width: iconSize, height: iconSize }} />
              )
            }
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ color: hoverColor }}
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
