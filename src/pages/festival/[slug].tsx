import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter"; // Import gray-matter
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/MDXLayout"; // Layout component

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src", "markdown", "festival"),
  );
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.mdx$/, "") }, // Remove the .mdx extension
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(
    process.cwd(),
    "src",
    "markdown",
    "festival",
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true }; // Handle missing files
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Use gray-matter to parse the frontmatter and content
  const { data, content } = matter(fileContent);

  // Serialize the MDX content for rendering with MDXRemote
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      title: data.title || "Default Festival Title", // Use frontmatter title or fallback
      date: data.date || "Unknown Date", // Example of additional frontmatter usage
    },
  };
};

const FestivalPage = ({
  mdxSource,
  title,
}: {
  mdxSource: any;
  title: string;
}) => {
  return (
    <Layout title={title}>
      <MDXRemote {...mdxSource} />
    </Layout>
  );
};

export default FestivalPage;
