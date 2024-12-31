// components/MDXLayout.tsx
import { ReactNode } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { ChakraMDXProvider } from "../components/MDXProvider";

interface MDXLayoutProps {
  children: ReactNode;
  title: string;
}

const MDXLayout = ({ children, title }: MDXLayoutProps) => {
  return (
    <ChakraMDXProvider>
      <Container
        maxW={{ base: "full", md: "container.md" }}
        mt={16}
        px={{ base: 12, sm: 6, md: 8 }}
      >
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }} // Heading size changes based on screen size
          mb={4}
          color="red.500"
          textAlign="left" // Center-align the title on smaller screens
          lineHeight={{ base: "short", md: "normal" }} // Adjust line height for headings
        >
          {title}
        </Heading>
        <Box
          mb={8}
          textAlign="justify" // Justify text for better readability
          fontSize={{ base: "sm", md: "md" }}
          lineHeight={{ base: "1.6", md: "1.8" }}
        >
          {children}
        </Box>
      </Container>
    </ChakraMDXProvider>
  );
};

export default MDXLayout;
