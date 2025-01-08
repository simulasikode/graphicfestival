import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface StudioSectionProps {
  title: string;
  studio: string;
  date: string;
  time: string;
  content: string;
  bio: string;
  location: string;
  index: number;
}

const StudioSection: React.FC<StudioSectionProps> = ({
  title,
  studio,
  date,
  time,
  location,
  content,
  index,
  bio,
}) => {
  useEffect(() => {
    gsap.fromTo(
      `.section-${index}`,
      { opacity: 0, y: 100 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0, // Final position
        scrollTrigger: {
          trigger: `.section-${index}`,
          start: "top 80%", // Trigger the animation when the section reaches 80% of the viewport height
          end: "top 30%",
          scrub: 1,
        },
      },
    );
  }, [index]);

  return (
    <Box className={`section-${index}`} mt={6} mb={8}>
      <VStack spacing={4} align="flex-start">
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Heading size="md">{studio}</Heading>
        <Text>{date}</Text>
        <Text>{time}</Text>
        <Text>{location}</Text>
        <Text>{content}</Text>
        <Text color="gray.500">{bio}</Text>
      </VStack>
    </Box>
  );
};

export default StudioSection;
