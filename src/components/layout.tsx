import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box as="main" flex="1" px={6}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
