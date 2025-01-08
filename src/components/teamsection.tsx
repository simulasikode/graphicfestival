import React, { useEffect } from "react";
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
  Text,
} from "@chakra-ui/react";
import { gsap } from "gsap";

const MyTable = () => {
  const data = [
    { name: ["Sukma Smita Grah Brilianesti"], position: "Direktur Festival" },
    { name: ["Putri Okta"], position: "Manajer Administrasi & Keuangan" },
    {
      name: ["Krisnawan Wisnu Adi", "Hardiwan Prayogo"],
      position: "Tim Editorial Teks",
    },
    { name: ["Agung Kurniawan"], position: "Direktur Artistik" },
    { name: ["Rudi Hermawan", "Alfin Agnuba"], position: "Tim Artistik" },
    { name: ["Nopel Basuki"], position: "Manajer Produksi" },
    { name: ["Aditya Hibah", "Faiq al Fahmi"], position: "Staf Produksi" },
    { name: ["Prihatmoko Moki"], position: "Desainer" },
    { name: ["Muhammad Dzulqarnain"], position: "Manajer Program" },
    { name: ["Nabila Yola Insani"], position: "Asisten Manajer Program" },
    {
      name: ["Alfin Agnuba", "Khoiril Maqin", "Putri Okta"],
      position: "Koordinator Program Kolaborasi - Kolakora (Skolmus)",
    },
    {
      name: ["Prihatmoko Moki", "Putri Okta"],
      position:
        "Koordinator Program Kolaborasi - Buku Kawruh: Among Boga (Sanggar Lumbung Kawruh)",
    },
    {
      name: ["Alfin Agnuba"],
      position:
        "Koordinator Program Kolaborasi - Diskusi dan Lokakarya Produksi Cetak Saring (Sekolah Sablon Indonesia)",
    },
    {
      name: ["Muhammad Dzulqarnain"],
      position:
        "Koordinator Program Kolaborasi - Cutting the Edge (SeniNGrafis)",
    },
    {
      name: ["Febrian Adinata Hasibuan", "Sita Magfira"],
      position: "Kurator Pameran Ada dan Berlipat Ganda",
    },
    {
      name: ["Britto Wirajati", " Ace House Collective"],
      position: "Kurator Pameran Artist Proof",
    },
    {
      name: ["Khoiril Maqin"],
      position: "Kurator Pameran Cetak Aksi: Dari Kamar Gelap ke Lapak Terang",
    },
    {
      name: ["Sultan Bil Qisthi"],
      position: "Staf Pengelola Data",
    },
    {
      name: ["Kurnia Yaumil Fajar"],
      position: "Manajer Marketing dan Komunikasi Publik",
    },
    {
      name: ["Abimanyu Dirgantara"],
      position: "Koordinator Media Sosial",
    },
    {
      name: ["Uniph Kahfi"],
      position: "Relasi Media",
    },
    {
      name: ["M. Fahriza Ansyari", "Happy Rolitasari"],
      position: "Desainer",
    },
    {
      name: ["Wulang Sunu", "Arga Radikun"],
      position: "Perancang Identitas Visual",
    },
    {
      name: ["Ridho Afwan Rahman"],
      position: "Manajer Panggung Pembukaan Festival",
    },
    {
      name: [
        "Farhan Rizki Fauzi",
        "Jati Pramudya Darmastuti",
        "Anisa Dewi Maharani",
        "Yosef Bergas",
      ],
      position: "Tim Dokumentasi",
    },
    {
      name: ["Fredy Hendra"],
      position: "Koordinator Logistik",
    },
    {
      name: [
        "Eva Maulidia Bahesti",
        "Laksamana Al Hafiz",
        "Ardian Satria Natalino",
        "Anoel Raditya",
        "Bondan Nur Akhsani",
        "Daffa Saifullah",
        "Farid Akmal Maulana",
        "Beny Hardiputra",
      ],
      position: "Magang",
    },
    {
      name: [
        "Addo Satria Widyadhana",
        "Andika Himawan",
        "Denny Saiful Anwar",
        "Iza Muhammad Rafli",
        "Laily Mamdhuhah",
        "Raka Wanena",
        "Syeifty",
        "Yoga Prawira ",
      ],
      position: "Staf Pendukung",
    },
  ];

  useEffect(() => {
    gsap.from(".table-row", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  const handleHover = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    isHovered: boolean,
  ) => {
    const row = event.currentTarget;
    gsap.to(row, {
      scale: isHovered ? 1.01 : 1,
      backgroundColor: isHovered ? "rgba(0, 0, 0, 0.1)" : "transparent",
      duration: 0.3,
    });
  };

  const italicizeWords = (text: string) => {
    return text.split(" ").map((word, index) => {
      // Apply italic to specific words, e.g., "Specialist"
      if (
        word.toLowerCase() === "Kolakora" ||
        word.toLowerCase() === "Buku Kawruh: Among Boga"
      ) {
        return (
          <Text as="span" key={index} fontStyle="italic">
            {word}{" "}
          </Text>
        );
      } else {
        return (
          <Text as="span" key={index}>
            {word}{" "}
          </Text>
        );
      }
    });
  };

  return (
    <TableContainer>
      <Heading as="h3" size={{ base: "md", md: "2xl" }} mb={3}>
        Tim Kerja
      </Heading>
      <Heading
        as="h1"
        size={{ base: "md", md: "2xl" }}
        mb={10}
        fontFamily="Basteleur"
      >
        Festival Seni Cetak Grafis: Trilogia
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Position</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr
              key={index}
              className="table-row"
              onMouseEnter={(e) => handleHover(e, true)} // Hover in
              onMouseLeave={(e) => handleHover(e, false)} // Hover out
            >
              <Td>
                {/* Display multiple names as a list */}
                <Box as="ul" padding={0} margin={0}>
                  {item.name.map((name, i) => (
                    <Box as="li" key={i} listStyleType="none" fontWeight="bold">
                      {name}
                    </Box>
                  ))}
                </Box>
              </Td>
              <Td whiteSpace="wrap" fontSize={{ base: "sm", md: "md" }}>
                {/* Apply italicizeWords function to position */}
                {italicizeWords(item.position)}{" "}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
