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
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid"; // Heroicons for Dark Mode toggle
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle }: { isOpen: boolean; onToggle: () => void } =
    useDisclosure();

  const color = useColorModeValue("gray.800", "gray.100");
  const hoverColor = useColorModeValue("cardinal.500", "anzac.500");
  const iconSize = 24; // Set consistent icon size

  const links = [
    { label: "Festival", href: "/festival" },
    { label: "Program", href: "/program" },
  ];

  const svgFillColor = useColorModeValue("#D5253A", "#DDA139");

  const navbarRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  // Wrap handleScroll in useCallback
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && scrollingUp) {
      // Scrolling down - hide navbar
      setScrollingUp(false);
      gsap.to(navbarRef.current, {
        y: -100,
        duration: 0.5,
        ease: "power4.out",
      });
    } else if (currentScrollY < lastScrollY && !scrollingUp) {
      // Scrolling up - show navbar
      setScrollingUp(true);
      gsap.to(navbarRef.current, { y: 0, duration: 0.5, ease: "power4.out" });
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollingUp]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <>
      <Box
        as="header"
        position="fixed"
        color={color}
        backdropFilter="blur(8px)"
        width="100%"
        zIndex="1000"
        top={0}
        left={0}
        py={2}
        shadow="sm"
      >
        <Flex
          maxW="7xl"
          mx="auto"
          align="center"
          justify="space-between"
          wrap="wrap"
          alignItems="center"
        >
          {/* Logo */}
          <Box
            as="svg"
            width={{ base: "60px", md: "50px" }} // Responsive size
            height={{ base: "60px", md: "50px" }}
            pl={{ base: 2, md: 0 }}
          >
            <Link href="/" _hover={{ color: hoverColor }}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                enable-background="new 0 0 60 60"
              >
                <g>
                  <path
                    fill={svgFillColor}
                    d="M49.6,10.1h-3.3H12.9H9.6h0v3.3v15v3.3v15v3.3h0h3.3h15H28h3.1h0.1h15h3.3h0V31.6v-3.1L49.6,10.1L49.6,10.1
		z M27.9,46.7h-15v-15h15V46.7z M46.2,46.7h-15v-15h15V46.7z M46.2,28.4h-15h-3.3h-15v-15h33.3V28.4z"
                  />
                </g>
              </svg>
            </Link>
          </Box>
          <Box
            ref={navbarRef}
            flex={1}
            fontSize="lg"
            fontWeight="medium"
            transform="translateY(0.3)"
            fontFamily="Basteleur"
            ml={2}
          >
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
            variant="none"
            pr={{ base: 4, md: 0 }}
          />

          {/* Desktop Navigation and Icons */}
          <HStack
            spacing={6}
            as="nav"
            display={{ base: "none", md: "flex" }}
            align="center"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontWeight="bold"
                _hover={{ color: hoverColor }}
              >
                {link.label}
              </Link>
            ))}

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
          px={4}
          py={2}
          width="100vw"
          zIndex={1000}
          transition="all 0.3s ease-in-out"
        >
          <VStack spacing={4} color={color} align="left">
            {/* Menu Links */}
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontWeight="bold"
                fontSize="2xl"
                _hover={{ color: hoverColor }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Header;
