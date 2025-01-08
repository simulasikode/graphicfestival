import React, { useEffect } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StudioSection from "@/components/StudioList";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function GSAPScrollTable() {
  useEffect(() => {
    // GSAP ScrollTrigger animation for table rows
    gsap.fromTo(
      ".text", // target all table rows with class "table-row"
      { opacity: 50, y: 10 }, // initial state
      {
        opacity: 1,
        y: 0, // end state
        duration: 1,
        stagger: 0.2, // stagger the animation for each row
        scrollTrigger: {
          trigger: ".table-container", // the table container as the trigger
          start: "top 80%", // when the top of the table container reaches 80% from top of the viewport
          end: "bottom top", // when the bottom of the table reaches the top of the viewport
          scrub: true, // makes the animation follow the scroll
        },
      },
    );
  }, []);

  return (
    <Box py={{ base: "16", md: "16" }} px={{ base: "0", md: "16" }}>
      <Heading
        as="h1"
        fontFamily="basteleur"
        size="xl"
        mb={8}
        color="cardinal.500"
      >
        Program Publik
      </Heading>
      <Box className="table-container" maxW={"container.sm"}>
        <Text className="text" mb={4} fontSize="lg">
          Program Publik Festival Seni Cetak Grafis ‘Trilogia’ dirancang untuk
          melibatkan publik secara langsung melalui dua kegiatan utama: Aktivasi
          Pameran dan Aktivasi Studio.
        </Text>
        <Text className="text" mb={4} fontSize="lg">
          Di dalam <b>Aktivasi Pameran</b> pengunjung dapat mengikuti ragam
          kegiatan mulai dari penjelasan kuratorial yang mendalam terkait
          pandangan dan gagasan beragam karya dan koleksi yang dipamerkan,
          hingga berbagai aktivasi karya melalui program lokakarya, permainan,
          sampai pertunjukan bersama beberapa seniman serta komunitas.
        </Text>
        <Text className="text" mb={4} fontSize="lg">
          Sementara itu, <b>Aktivasi Studio</b> merupakan program yang dirancang
          melalui kerja sama dengan beberapa studio cetak grafis dengan tujuan
          memperluas jangkauan festival ini agar tidak hanya terpusat di
          Yogyakarta, namun tersebar di berbagai wilayah di Indonesia. Lokakarya
          cetak grafis akan diadakan dan tersebar di Grafis Minggiran
          (Yogyakarta), Grafis Huru Hara (Jakarta), Devfto Printmaking Institute
          dan Black Hand Gang (Bali). Studio-studio ini akan menggelar lokakarya
          yang terbuka bagi publik, menghadirkan eksplorasi kreatif dan
          pembelajaran berbagai bentuk teknik cetak.
        </Text>
      </Box>
      <Box mt={32} mb={20} className="text">
        <Heading as="h3" size="lg" fontFamily="basteleur">
          Aktivasi Studio
        </Heading>
        <VStack spacing={6} maxW={"container.sm"}>
          <StudioSection
            index={1}
            title="Lokakarya drypoint printed on fabric"
            studio="Studio Grafis Minggiran"
            date="10 Desember 2024"
            time="10:00 - 17:00"
            location="Grafis Minggiran, Yogyakarta"
            content="Dalam rangka memperluas diseminasi pengetahuan dan praktik seni cetak grafis kepada publik, Festival Seni Cetak Grafis ‘Trilogia’ 2024 bekerja bersama Studio Grafis Minggiran untuk menggelar sebuah lokakarya. Lokakarya ini berfokus pada salah satu teknik dalam seni cetak grafis, yakni drypoint printed on fabric."
            bio="Studio Grafis Minggiran merupakan kolektif seni yang berbasis di Yogyakarta yang berfokus pada pengembangan teknik-teknik dalam seni cetak grafis. Kolektif ini didirikan pada 2001 oleh sekelompok seniman yang saat itu merupakan mahasiswa Seni Grafis, Jurusan Seni Murni, Institut Seni Indonesia Yogyakarta. Studio Grafis Minggiran memiliki berbagai program pameran dan lokakarya yang melibatkan publik luas, mulai dari seniman, siswa-siswi sekolah dan para mahasiswa. "
          />

          <StudioSection
            index={2}
            title="Lokakarya Stensil (Cetak Saring)"
            studio="Grafis Huru Hara"
            date="12 Desember 2024"
            time="10:00 - 17:00"
            location="Grafis Huru Hara, Jakarta"
            content="Dalam rangka memperluas diseminasi pengetahuan dan praktik seni cetak grafis kepada publik, Festival Seni Cetak Grafis ‘Trilogia’ 2024 bekerja bersama Grafis Huru Hara untuk menggelar sebuah lokakarya. Lokakarya ini berfokus pada salah satu teknik dalam seni cetak grafis, yakni stensil (cetak saring)."
            bio="Grafis Huru Hara (GHH) adalah kolektif seni cetak yang berbasis di Jakarta, didirikan pada 2012. GHH berfokus pada metode eksploratif, eksperimental, dan edukatif dengan seni cetak grafis sebagai medium utama. Saat ini, GHH memiliki 8 anggota, yaitu Adi Setiawan, Adi Sundoro, Amy Zahrawaan, Anita Purniawati, Ariffal Nur Arochman, Bhakti Tanza Luthfi, Panji Purnama Putra, dan Riezky Hana Putra. Studio Grafis Huru Hara berfungsi seperti laboratorium seni, menjadi ruang untuk eksplorasi dan eksperimen berbagai teknik cetak serta pengembangannya. Pada 2018, ruangrupa bersama Serrum dan Grafis Huru Hara memprakarsai GUDSKUL: Contemporary Art Collective and Ecosystem Studies (atau disingkat GUDSKUL, yang diucapkan seperti 'good school' dalam bahasa Inggris), sebuah ruang belajar publik. GUDSKUL dirancang sebagai ruang simulasi kerja kolektif yang mempromosikan pentingnya dialog kritis dan eksperimental melalui proses berbagi dan pembelajaran berbasis pengalaman."
          />
          <StudioSection
            index={3}
            title="Lokakarya Botanical Monotype"
            studio="Devfto Printmaking Institute"
            date="12 Desember 2024"
            time="10:00 - 17:00"
            location="Devfto Printmaking Institute, Bali"
            content="Dalam rangka memperluas diseminasi pengetahuan dan praktik seni cetak grafis kepada publik, Festival Seni Cetak Grafis ‘Trilogia’ 2024 bekerja bersama Devfto Printmaking Institute untuk menggelar sebuah lokakarya. Lokakarya ini berfokus pada salah satu teknik dalam seni cetak grafis, yakni botanical monotype. "
            bio="Devfto Printmaking Institute merupakan studio cetak grafis di Bali yang didirikan oleh Devy Ferdianto serta memiliki visi edukasi publik dan para kolektor seni mengenai seni cetak grafis. Sebagai sebuah institusi, Devfto ingin menciptakan aksesibilitas terhadap pengetahuan seni cetak grafis dengan menghadirkan para ahli untuk menjelaskan proses teknik, nilai-nilai estetika serta komersial seni cetak grafis. Dalam rangka menunjang tujuan ini, Devfto memiliki fasilitas dan peralatan berbagai teknik seni cetak grafis, seperti linocut, screen printing, monotype, cyanotype, lithography, softground etching dan photo-intaglio.  Lahir dan tumbuh di Bali, institusi ini terus berupaya untuk menciptakan kesempatan bagi para seniman seraya meningkatkan perkembangan infrastruktur seni di sana."
          />
          <StudioSection
            index={4}
            title="Lokakarya Reduction Linocut"
            studio="Black Hand Gang"
            date="13 Desember 2024"
            time="10:00 - 15:00"
            location="Black Hand Gang, Bali"
            content="Dalam rangka memperluas diseminasi pengetahuan dan praktik seni cetak grafis kepada publik, Festival Seni Cetak Grafis ‘Trilogia’ 2024 bekerja bersama Black Hand Gang untuk menggelar sebuah lokakarya. Lokakarya ini berfokus pada salah satu teknik dalam seni cetak grafis, yakni reduction linocut."
            bio="Black Hand Gang merupakan studio seni cetak grafis yang berdiri pada 2020 di Bali. Black Hand Gang menyediakan fasilitas yang mengkombinasikan ruang studio seniman dan ruang produksi cetak. Mereka telah banyak bekerja bersama para seniman baik lokal, nasional hingga internasional melalui serangkaian program. Black Hand Gang juga menyediakan layanan komersial, mulai dari proses produksi hingga distribusi. Studio ini terus berupaya untuk menerapkan prinsip ramah lingkungan, salah satunya melalui penggunaan zat kimia yang rendah racun."
          />
        </VStack>
      </Box>
    </Box>
  );
}

export default GSAPScrollTable;
