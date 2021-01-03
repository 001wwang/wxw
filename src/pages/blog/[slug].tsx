import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  propNames,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { join } from "path";
import Layout from "../../layouts/Layout";
import Nav from "../../components/Nav";
import MDXComponents from "../../components/MDXComponents";

export const getStaticPaths = async () => {
  const blogPostSlugs = readdirSync("_posts").map((f) => ({
    params: { slug: f.replace(".mdx", "") },
  }));

  return {
    paths: blogPostSlugs,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const parsedMarkdown = matter.read(join("_posts", params.slug + ".mdx"));
  const mdxSource = await renderToString(parsedMarkdown.content);

  return {
    props: {
      slug: params.slug,
      mdata: parsedMarkdown.data,
      source: mdxSource,
    },
  };
};

const Post = ({ slug, mdata, source }) => {
  const mdxContent = hydrate(source, {
    components: { ...MDXComponents },
  });

  return (
    <Box>
      <Nav></Nav>
      <Layout>
        <Flex w="100%" justify="center">
          <Flex direction="column" maxW="70ch">
            <Heading>{mdata.title}</Heading>
            <Box className="mdx-prose">{mdxContent}</Box>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default Post;
