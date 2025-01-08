import { MDXProvider } from "@mdx-js/react";
import { Heading, List, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type MDXComponentProps = {
  children: ReactNode;
};

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h1" size="xl" mt={4} mb={4} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h1" size="xl" mt={4} mb={4} {...props} />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h3" size="md" mt={2} mb={2} {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading as="h4" size="sm" {...props} />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" mt={2} {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="hr" mt={2} mb={2} {...props} />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <List styleType="square" spacing={2} ml={12} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <OrderedList listStyleType="decimal" {...props} />
  ),

  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <ListItem {...props} />,
};

export const ChakraMDXProvider = ({ children }: MDXComponentProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
