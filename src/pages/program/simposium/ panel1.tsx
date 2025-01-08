import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function PanelOneTable() {
  useEffect(() => {
    // ScrollTrigger with custom scroll control
    ScrollTrigger.create({
      trigger: "body", // The body element triggers scroll animations
      start: "top top", // Start the trigger when the body reaches the top of the viewport
      end: "bottom bottom", // End when the body reaches the bottom
      scrub: true, // Makes the animation tied to the scroll position
      onUpdate: (self) => {
        // Control the scroll position and prevent it from going past the top
        if (self.scroll() <= 0) {
          window.scrollTo(0, 0); // Keep the scroll at the top
        }
      },
    });

    return () => {
      // Clean up ScrollTrigger when the component is unmounted
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box py={8}>
      <Box>
        <Heading as="h6" size="md" mb={4}>
          Panel 1: Citra dan Imajinasi Identitas Seminar Umum - Watak Seni Cetak
          Grafis di Indonesia
        </Heading>
      </Box>
      <TableContainer
        className="table-container"
        overflowY="auto"
        maxHeight="300px"
      >
        <Table colorScheme="gray" size="sm">
          <Thead>
            <Tr position="sticky" top="0" zIndex="1">
              <Th>Location</Th>
              <Th>Date/Time</Th>
              <Th>Event</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td
                rowSpan={6}
                whiteSpace="wrap"
                wordBreak="break-word"
                maxWidth="260px"
                position="sticky"
                top="0"
                zIndex="1"
              >
                Ruang Palma, Pascasarjana Universitas Sanata Dharma{" "}
              </Td>
              <Td>13.00 - 13.15</Td>
              <Td>Pembukaan</Td>
              <Td>{""}</Td>
            </Tr>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td>13.20 - 13.35</Td>
              <Td>Malcolm Le Smith</Td>
              <Td whiteSpace="wrap" wordBreak="break-word">
                Tanah Impian (<em>Dream Land</em>): sebuah proyek Krack! Studio
                yang sedang berjalan
              </Td>
            </Tr>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td>13.40 - 13.55</Td>
              <Td>Gladhys Elliona Syahutari</Td>
              <Td>
                Perbandingan Kualitas Efemera Seni Pertunjukan Dewan Kesenian
                Jakarta di Dekade 1979-1989
              </Td>
            </Tr>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td>14.00 - 14.15</Td>
              <Td>St. Sunardi</Td>
              <Td>
                Mempertimbangkan ‘Tekne’ Kembali - Catatan tentang Seni Cetak
                Grafis di Indonesia
              </Td>
            </Tr>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td>14.20 - 15.00</Td>
              <Td>Tanya Jawab</Td>
              <Td>{""}</Td>
            </Tr>
            <Tr className="table-row" position="sticky" top="0" zIndex="1">
              <Td>15.00 - 16.00</Td>
              <Td>ISHOMA</Td>
              <Td>{""}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PanelOneTable;
