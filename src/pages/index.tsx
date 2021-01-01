import Nav from "../components/Nav";
import Layout from "../layouts/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import PostCard from "../components/PostCard";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { GetStaticProps } from "next";

interface Props {
  posts: Post[];
}

export interface Post {
  slug?: string;
  title: string;
  date: string;
  desc: string;
  tags: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = readdirSync("_posts")
    .slice(0, 5)
    .map((f) => {
      const mdata = matter.read(join("_posts", f)).data;
      return {
        slug: f.replace(".mdx", ""),
        title: mdata.title as string,
        date: new Date(mdata.date).toDateString(),
        desc: mdata.description as string,
        tags: mdata.tags as string[],
      };
    });

  return {
    props: { posts },
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <Nav></Nav>
      <Layout>
        <Flex direction={["column", "column", "row"]}>
          <Flex w="100%" direction="column" align="center">
            <br></br>
            <Flex justify="center" align="center">
              <Box maxW="60ch">
                <Text>
                  Hey, I’m Will! I graduate from the University of Chicago in
                  2021 with a computer science degree.
                  <br></br>
                  <br></br>
                </Text>
              </Box>
            </Flex>
            <Flex maxW="60ch" direction="column">
              {posts.map((p) => (
                <Box m="0.25rem">
                  <PostCard key={p.title} post={p}></PostCard>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
}
