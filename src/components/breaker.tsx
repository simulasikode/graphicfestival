import { Box } from "@chakra-ui/react";

interface BreakerProps {
  image: string; // URL of the background image
  height?: { base: string; md: string; lg?: string }; // Optional height (default: 100vh)
  children?: React.ReactNode; // Content inside the breaker
}

const Breaker: React.FC<BreakerProps> = ({
  image,
  height = { base: "50vh", md: "75vh", lg: "100vh" },

  children,
}) => {
  return (
    <Box
      position="relative"
      w="100%"
      mt={32}
      h={height}
      bg={`url(${image})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="1"
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Breaker;
