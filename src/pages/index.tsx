import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Box as="main" py={12} px={6}>
        <Flex
          maxW="7xl"
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Section: Hero Text */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }} px={4}>
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color="cardinal.500"
              fontWeight="bold"
              lineHeight="short"
            >
              Welcome to the Festival
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={6}>
              Discover an amazing lineup of artists, events, and experiences.
              Join us for an unforgettable celebration of creativity and
              culture.
            </Text>
          </Box>

          {/* Right Section: Hero Image */}
        </Flex>
      </Box>
    </>
  );
};

export default Index;
