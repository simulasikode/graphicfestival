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

function LocationRowSpanTable() {
  return (
    <Box py={8}>
      <Box>
        <Heading as="h1" size="xl" fontFamily="basteleur" mb={4}>
          Rundown Simposium
        </Heading>
      </Box>
      <Box>
        <Heading as="h5" size="md" mb={1}>
          Jumat, 13 Desember 2024
        </Heading>
        <Heading as="h6" size="md" mb={4}>
          Seminar Umum - Watak Seni Cetak Grafis di Indonesia
        </Heading>
      </Box>
      <TableContainer overflowX="auto" maxHeight="300px">
        <Table colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              <Th>Location</Th>
              <Th>Date/Time</Th>
              <Th>Event</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                rowSpan={6}
                whiteSpace="wrap"
                wordBreak="break-word"
                maxWidth="260px"
                position="sticky"
                top="0"
                zIndex="1"
              >
                Ruang Koendjono, Lantai 4, Gedung Rektorat Kampus II,
                Universitas Sanata Dharma{" "}
              </Td>
              <Td>09.00 - 09.30</Td>
              <Td>Pembukaan</Td>
              <Td>{""}</Td>
            </Tr>
            <Tr>
              <Td>09.30 - 10.05</Td>
              <Td>Alexander Supartono</Td>
              <Td>
                <em>Original Copy:</em> Watak Politik Kerja Cukil Kayu
              </Td>
            </Tr>
            <Tr>
              <Td>10.10 - 10.45</Td>
              <Td>Citra Smara Dewi</Td>
              <Td>Peta Jalan Seni Cetak Grafis Jakarta</Td>
            </Tr>
            <Tr>
              <Td>10.50 - 11.25</Td>
              <Td>St. Sunardi</Td>
              <Td>
                Mempertimbangkan ‘Tekne’ Kembali - Catatan tentang Seni Cetak
                Grafis di Indonesia
              </Td>
            </Tr>
            <Tr>
              <Td>11.25 - 12.00</Td>
              <Td>Tanya Jawab</Td>
              <Td>{""}</Td>
            </Tr>
            <Tr>
              <Td>12.00 - 13.00</Td>
              <Td>ISHOMA</Td>
              <Td>{""}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LocationRowSpanTable;
