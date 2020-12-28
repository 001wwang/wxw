import { Box, Flex } from "@chakra-ui/react";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { join } from "path";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

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
      source: mdxSource,
    },
  };
};

const Post = ({ slug, source }) => {
  const mdxContent = hydrate(source, { components: {} });
  return (
    <Box>
      <Nav></Nav>
      <Layout>
        <Flex direction="column" w="100%" align="center">
          <Flex direction="column" maxW="70ch">
            {mdxContent}
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default Post;
