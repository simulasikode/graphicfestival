import { Box, Heading, Text, Divider, Stack, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const TeamSection = () => {
  return (
    <Box as="section" py={8}>
      <Box maxW="container.xl" mx="auto">
        <Heading as="h2" size="xl" mb={8} fontFamily="Basteleur">
          Tim Kerja Festival
        </Heading>

        <Stack spacing={6}>
          {/* Team Member 1 */}
          <Box>
            <Divider borderColor="cardinal.300" mb={4} />
            <Text fontSize="2xl" fontWeight="bold">
              Sukma Smita Grah Brilianesti
            </Text>
            <Text color="gray.500">Direktur Festival</Text>
          </Box>
          {/* Team Member 2 */}
          <Box>
            <Divider borderColor="cardinal.300" mb={4} />
            <Text fontSize="2xl" fontWeight="bold">
              Agung Kurniawan
            </Text>
            <Text color="gray.500">Direktur Artistik</Text>
          </Box>
          {/* Link to Full Team Page */}
          <Box py={8} mb={20}>
            <NextLink href="/festival/tim-kerja" passHref>
              <Button colorScheme="cardinal">Lihat Semua</Button>
            </NextLink>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default TeamSection;
