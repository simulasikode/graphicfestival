// components/IndexLayoutWithDivider.tsx
import { useEffect, useRef } from "react";
import { Box, Flex, Heading, Divider, Link, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

const ProgramLayout = ({
  sections,
}: {
  sections: { title: string; content: string; link: string }[];
}) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      sectionsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" },
    );
  }, []);

  return (
    <Box py={{ base: "16", md: "16" }} px={{ base: "0", md: "16" }}>
      <Heading mb={4} fontFamily="Basteleur">
        Program
      </Heading>
      <Heading mb={12} size={{ base: "sm", md: "md" }}>
        Festival Seni Cetak Grafis: Trilogia
      </Heading>
      <Flex direction="column" alignContent={"center"} gap={4}>
        {sections.map((section, index) => (
          <Box
            key={index}
            ref={(el: HTMLDivElement | null) => {
              sectionsRef.current[index] = el; // Explicitly type 'el' as HTMLDivElement or null
            }}
          >
            <Flex
              justifyContent={"space-between"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <Link
                href={section.link}
                _hover={{ textDecoration: "none", color: "cardinal.500" }}
              >
                <Heading size={{ base: "sm", md: "lg" }} mb={2}>
                  {section.title}
                </Heading>
              </Link>

              <Text fontSize={{ base: "sm", md: "lg" }}>{section.content}</Text>
            </Flex>

            {index < sections.length - 1 && <Divider mt={2} />}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProgramLayout;
