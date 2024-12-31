import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: async () => {
    const remarkGfm = await import("remark-gfm");
    return {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeAutolinkHeadings],
    };
  },
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
