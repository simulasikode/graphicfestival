import React, { useEffect, useRef } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { gsap } from "gsap";

const SchedulePage: React.FC = () => {
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tableRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <Box ref={tableRef} maxW="full" mx="auto" mt={10} p={5} overflow="hidden">
      <Flex mb={12} flex={1} justifyContent="space-between" alignItems="center">
        <Heading fontSize="lg">Jadwal Kegiatan Festival</Heading>
        <Text>07-20 Deseember 2024</Text>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>30</Td>
              <Td isNumeric>85</Td>
            </Tr>
            <Tr>
              <Td>Jane Smith</Td>
              <Td>25</Td>
              <Td isNumeric>90</Td>
            </Tr>
            <Tr>
              <Td>Sam Brown</Td>
              <Td>28</Td>
              <Td isNumeric>88</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SchedulePage;
