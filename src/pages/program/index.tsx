// pages/index.tsx
import ProgramLayout from "../../components/ProgramLayout";

const IndexPage = () => {
  const sections = [
    {
      title: "Pameran",
      content: "Menjelang Hari Gemilang",
      link: "/program/pameran",
    },
    {
      title: "Simposium",
      content: "Seni Cetak Grafis: Melihat Watak Bekerja",
      link: "/program/simposium",
    },
    {
      title: "Program Publik",
      content: "Salah satu perluasan dari rangkaian ",
      link: "/program/publik",
    },
    {
      title: "Program Kolaborasi",
      content: "Aktivasi Pameran dan Aktivasi Studio.",
      link: "/program/kolaborasi",
    },
  ];

  return <ProgramLayout sections={sections} />;
};

export default IndexPage;
