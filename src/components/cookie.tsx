import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Box, Button, Text, Flex } from "@chakra-ui/react";

const AcceptCookies = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookieAccepted = Cookies.get("cookies-accepted");
    if (cookieAccepted) {
      setIsAccepted(true);
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookies-accepted", "true", { expires: 365 });
    setIsAccepted(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      bg="anzac.300"
      zIndex={1000}
      color="cardinal.500"
      py={4}
      px={6}
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="md">
          Kami menggunakan <i>cookie</i> untuk meningkatkan pengalaman Anda.
          Dengan melanjutkan, Anda menyetujui penggunaan <i>cookie</i> kami.
          <a href="/privacy-policy" style={{ textDecoration: "none" }}>
            Pelajari Selanjutnya
          </a>
        </Text>
        <Button colorScheme="cardinal" onClick={handleAccept}>
          Accept
        </Button>
      </Flex>
    </Box>
  );
};

export default AcceptCookies;
