// pages/index.tsx
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Container,
  VStack,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProgramGrid from "@/components/program";

const Home: React.FC = () => {
  const colorScheme = useColorModeValue("cardinal", "anzac");
  const color = useColorModeValue("cardinal.500", "anzac.500");
  {
    /*Paralax*/
  }
  const Landingref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(Landingref.current, {
        y: -50,
        scrollTrigger: {
          trigger: Landingref.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <Box mt={68} position="relative" mx="auto">
      <Box minH="100vh" className="main-content">
        <Container maxW="container.xl" p={0}>
          {/* Hero Section */}
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(12, 1fr)",
            }}
            gap={8}
            alignItems="center"
            justifyContent="center"
            py={20}
          >
            <GridItem colSpan={{ md: 6 }} ref={Landingref}>
              <VStack align="flex-start" spacing={6}>
                <Heading
                  size="3xl"
                  fontFamily="Basteleur"
                  color={color}
                  lineHeight={1.2}
                >
                  Festival Seni Cetak Grafis: Trilogia
                </Heading>
                <Text fontSize="lg">
                  Festival Seni Cetak Grafis “Trilogia” merupakan upaya Krack
                  sebagai kelompok pegiat seni cetak grafis untuk merayakan
                  praktik dan pengetahuan yang senantiasa berkembang luas dan
                  terepresentasi dalam seni cetak grafis. Watak seni cetak
                  grafis yang distributif, repetitif, dan reproduktif akan kami
                  jadikan pintu masuk untuk membicarakan berbagai topik dalam
                  dinamika sosial budaya masyarakat.
                </Text>
                <Button colorScheme={colorScheme} size="md">
                  <Link href="/festival/tentang">Selengkapnya</Link>
                </Button>
              </VStack>
            </GridItem>
            <GridItem colSpan={{ md: 6 }}>
              <Image
                src="/images/hero_home.webp"
                alt="Hero"
                maxW="80%"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
          <ProgramGrid />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
