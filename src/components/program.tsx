import { Grid, GridItem, Box, Text, useColorModeValue } from "@chakra-ui/react";

const ProgramGrid = () => {
  const color = useColorModeValue("gray.600", "gray.900");

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }} // Defines a 3-column grid
      gap={6} // Adds space between columns
      p={0} // Adds padding around the grid container
    >
      {/* Exhibition Section */}
      <GridItem>
        <Box
          width="mxauto"
          height="mxauto"
          bg="cardinal.50"
          p={6}
          borderRadius="md"
          shadow="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} color={color}>
            Program Pameran
          </Text>
          <Text color={color}>
            Seni cetak grafis adalah jejalin dari paradigma seni grafis dan seni
            cetak. Seni grafis sendiri adalah sebuah metode penciptaan seni
            dengan menggunakan media garis dengan seluruh elaborasi.
          </Text>
        </Box>
      </GridItem>

      {/* Symposium Section */}
      <GridItem>
        <Box
          width="mxauto"
          height="mxauto"
          bg="gray.100"
          p={6}
          borderRadius="md"
          shadow="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} color={color}>
            Program Simposium
          </Text>
          <Text color={color}>
            Hasil riset Krack! Printmaking Collective sepanjang 2022-2023
            menunjukkan bahwa seni cetak grafis memiliki sejarah panjang
            perkembangannya di Indonesia.
          </Text>
        </Box>
      </GridItem>
      {/* Public Section */}
      <GridItem>
        <Box
          width="mxauto"
          height="mxauto"
          bg="anzac.50"
          p={6}
          borderRadius="md"
          shadow="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} color={color}>
            Program Kolaborasi
          </Text>
          <Text color={color}>
            Kami bekerja bersama empat komunitas, yakni Sanggar Lumbung Kawruh
            (Gunungkidul, DIY), SkolMus (Kupang, NTT), SeniNGrafis (Galeri
            Nasional Indonesia), dan Sekolah Sablon Indonesia (Jakarta){" "}
          </Text>
        </Box>
      </GridItem>

      {/* Public Section */}
      <GridItem>
        <Box
          width="mxauto"
          height="mxauto"
          bg="#E6CDB8"
          p={6}
          borderRadius="md"
          shadow="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} color={color}>
            Program Publik
          </Text>
          <Text color={color}>
            Program Publik Festival Seni Cetak Grafis ‘Trilogia’ dirancang untuk
            melibatkan publik secara langsung melalui dua kegiatan utama:
            Aktivasi Pameran dan Aktivasi Studio.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ProgramGrid;
