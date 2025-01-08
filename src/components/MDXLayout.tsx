// components/MDXLayout.tsx
import { ReactNode } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { ChakraMDXProvider } from "../components/MDXProvider";
import DynamicBreadcrumb from "./Breadcrumb";

interface MDXLayoutProps {
  children: ReactNode;
  title: string;
}

const MDXLayout = ({ children, title }: MDXLayoutProps) => {
  return (
    <ChakraMDXProvider>
      <Container maxW="full" px="64px" py={4}>
        <Box mt={2} mb={8}>
          <DynamicBreadcrumb />
        </Box>
        <Box maxW={{ base: "full", md: "container.md" }}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }} // Heading size changes based on screen size
            mb={4}
            fontFamily="Basteleur"
            color="cardinal.500"
            textAlign="left" // Center-align the title on smaller screens
            lineHeight={{ base: "short", md: "normal" }} // Adjust line height for headings
          >
            {title}
          </Heading>
          <Box
            mb={8}
            textAlign="left" // Justify text for better readability
            fontSize={{ base: "sm", md: "md" }}
            lineHeight={{ base: "1.15", md: "1.25" }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </ChakraMDXProvider>
  );
};

export default MDXLayout;
