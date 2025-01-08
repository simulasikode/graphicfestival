import { useEffect } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import ScheduleTable from "./jadwal";
import PanelOneTable from "./ panel1";
import gsap from "gsap";

const markdownFiles = [
  {
    slug: "pengantar",
    title: "Pengantar",
    author: "Simposium Seni Cetak Grafis: Watak dalam Seni Cetak Grafis",
  },
];

const Simposium = () => {
  // GSAP Animation for the list
  useEffect(() => {
    gsap.fromTo(
      ".list-item",
      { opacity: 0, y: 50 }, // Initial state (invisible, slightly below)
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, // Final state (visible, original position)
    );
  }, []);

  return (
    <Box p={16}>
      <Heading as="h1" fontFamily="Basteleur" size="xl" mb={6}>
        Simposium
      </Heading>

      <List spacing={3}>
        {markdownFiles.map((file) => (
          <ListItem key={file.slug} className="list-item">
            <Link href={`/program/simposium/${file.slug}`}>
              <Flex
                justifyContent="space-between"
                alignContent="center"
                alignItems="center"
              >
                <Text
                  color="cardinal.500"
                  fontSize="xl"
                  fontWeight="bold"
                  _hover={{ textDecoration: "none", color: "cardinal.800" }}
                >
                  {file.title}
                </Text>
                <Text fontSize="lg" color="gray.500">
                  {file.author}
                </Text>
              </Flex>
            </Link>
            <Divider my={2} />
          </ListItem>
        ))}
      </List>
      <ScheduleTable />
      <PanelOneTable />
    </Box>
  );
};

export default Simposium;
