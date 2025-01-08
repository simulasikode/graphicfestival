import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { Box, Text } from "@chakra-ui/react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "../../../components/MDXLayout";

const PameranPost = ({ content, frontMatter }: any) => {
  return (
    <Box p={4}>
      <Layout title={frontMatter.title}>
        <Text fontSize="md" mb={4}>
          {frontMatter.date}
        </Text>
        <MDXRemote {...content} />
      </Layout>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [
    "pengantar",
    "ada-dan-berlipat-ganda",
    "artist-proof",
    "cetak-aksi",
  ]; // List your slugs here manually

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const filePath = path.join("src/markdown/program/pameran", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      content: mdxSource,
    },
  };
};

export default PameranPost;
