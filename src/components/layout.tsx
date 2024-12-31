import {
  Box,
  Container,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "./header";
import { useLenisScroll } from "./useLenisScroll";
import Breaker from "./breaker";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const containerMaxWidth = useBreakpointValue({ base: "100%" });
  useLenisScroll();

  return (
    <>
      <Box as="main" width="100%" bg={bg}>
        <Header />
        <Container
          maxW={containerMaxWidth}
          py={14} // This sets the max-width dynamically based on screen size
        >
          {children}
        </Container>
        <Breaker
          image="/images/break.png"
          height={{ base: "30vh", md: "40vh", lg: "68vh" }}
        />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
