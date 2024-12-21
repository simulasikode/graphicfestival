import { Box, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        px={4}
      >
        {/* Copyright Text */}
        <Text>
          © {new Date().getFullYear()} Krack! Studio. All rights reserved.
        </Text>

        {/* Links */}
        <Stack direction="row" spacing={4}>
          <Link
            href="/about"
            _hover={{ textDecoration: "none", color: "blue.100" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            _hover={{ textDecoration: "none", color: "blue.100" }}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            _hover={{ textDecoration: "none", color: "blue.100" }}
          >
            Privacy Policy
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
