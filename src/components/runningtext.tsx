import { Box, Text, keyframes, useColorModeValue } from "@chakra-ui/react";

const runningTextAnimation = keyframes`
  100% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const RunningText = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("#AA1E2E", "#DDA139");

  return (
    <Box
      as="div"
      position="relative"
      width="100%"
      bg={bgColor}
      color={textColor}
      overflow="hidden"
      zIndex={10}
      py={4}
    >
      <Box
        as="div"
        whiteSpace="nowrap"
        display="flex"
        alignItems="center"
        animation={`${runningTextAnimation} 50s linear infinite`}
        _hover={{
          animationPlayState: "paused", // Stops animation on hover
        }}
      >
        <Text
          as="span"
          fontSize="lg"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Festival Seni Cetak Grafis: Trilogia
        </Text>
        <Text as="span" fontSize="sm" px={2} display="inline-block">
          07-20 Desember 2024
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Galeri R.J Katamsi, D.I Yogayakarta. Indonesia
        </Text>
        <Text as="span" fontSize="md" px={2} display="inline-block">
          👋
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Festival Seni Cetak Grafis: Trilogia
        </Text>
        <Text as="span" fontSize="sm" px={2} display="inline-block">
          07-20 Desember 2024
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Galeri R.J Katamsi, D.I Yogayakarta. Indonesia
        </Text>
        <Text as="span" fontSize="md" px={2} display="inline-block">
          👋
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Festival Seni Cetak Grafis: Trilogia
        </Text>
        <Text as="span" fontSize="sm" px={2} display="inline-block">
          07-20 Desember 2024
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Galeri R.J Katamsi, D.I Yogayakarta. Indonesia
        </Text>
        <Text as="span" fontSize="md" px={2} display="inline-block">
          👋
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Festival Seni Cetak Grafis: Trilogia
        </Text>
        <Text as="span" fontSize="sm" px={2} display="inline-block">
          07-20 Desember 2024
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          display="inline-block"
        >
          Galeri R.J Katamsi, D.I Yogayakarta. Indonesia
        </Text>
        <Text as="span" fontSize="md" px={2} display="inline-block">
          👋
        </Text>
      </Box>
    </Box>
  );
};

export default RunningText;
