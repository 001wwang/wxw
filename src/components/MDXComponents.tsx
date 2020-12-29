import { chakra, Link } from "@chakra-ui/react";

const MDXComponents = {
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <chakra.h2 apply="mdx.h2" {...props} />,
  h3: (props) => <chakra.h2 apply="mdx.h3" {...props} />,
  h4: (props) => <chakra.h2 apply="mdx.h4" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="1rem" {...props} />,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
};

export default MDXComponents;
