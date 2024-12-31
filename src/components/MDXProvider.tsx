import { MDXProvider } from "@mdx-js/react";
import { Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type MDXComponentProps = {
  children: ReactNode;
};

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h1" size="2xl" mt={6} py={6} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h2" size="lg" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...props} />
  ),
};

export const ChakraMDXProvider = ({ children }: MDXComponentProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
