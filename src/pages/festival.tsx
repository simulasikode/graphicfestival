import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";

const Festival = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={16} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to the Festival
        </Heading>
        <Text fontSize="lg" mb={6}>
          Join us for a celebration of art, culture, and creativity.
        </Text>
        <Button size="md" colorScheme="teal">
          View Schedule
        </Button>
      </Box>

      {/* Schedule Preview */}
      <Box py={16} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Festival Schedule
        </Heading>
        <Flex justifyContent="center" gap={8} flexWrap="wrap">
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
            shadow="md"
          >
            <Heading as="h3" size="md" mb={2}>
              Day 1
            </Heading>
            <Text>Workshops and opening ceremony</Text>
          </Box>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
            shadow="md"
          >
            <Heading as="h3" size="md" mb={2}>
              Day 2
            </Heading>
            <Text>Gallery tours and performances</Text>
          </Box>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
            shadow="md"
          >
            <Heading as="h3" size="md" mb={2}>
              Day 3
            </Heading>
            <Text>Closing ceremony and awards</Text>
          </Box>
        </Flex>
      </Box>

      {/* Program Highlights */}
      <Box bg="gray.100" py={16} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Program Highlights
        </Heading>
        <Flex justifyContent="center" gap={8} flexWrap="wrap">
          <Box textAlign="center">
            <Image
              src="/images/program-1.jpg"
              alt="Program 1"
              borderRadius="md"
            />
            <Heading as="h3" size="md" mt={4}>
              Interactive Workshop
            </Heading>
            <Text>Hands-on experience with artists.</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="/images/program-2.jpg"
              alt="Program 2"
              borderRadius="md"
            />
            <Heading as="h3" size="md" mt={4}>
              Live Performances
            </Heading>
            <Text>Musical acts and live art.</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="/images/program-3.jpg"
              alt="Program 3"
              borderRadius="md"
            />
            <Heading as="h3" size="md" mt={4}>
              Art Exhibitions
            </Heading>
            <Text>Discover contemporary art pieces.</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Festival;
