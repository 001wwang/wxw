import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import BlogCard from "../components/BlogCard";
import { readdirSync, readFileSync } from "fs";
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
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Will Wang</title>
      </Head>
      <Nav></Nav>
      <Layout>
        <Flex direction={["column", "column", "row"]}>
          <Flex w="100%" direction="column" align="center">
            <br></br>
            <Flex justify="center" align="center">
              <Box maxW="60ch">
                <Text mb="1em">
                  Hey, I’m Will! I graduate from the University of Chicago in
                  2021 with a computer science degree.
                  <br></br>
                  <br></br>
                </Text>
              </Box>
            </Flex>
            <Flex w={["100%", "", "80%", "70%"]} direction="column">
              {posts.map((p) => (
                <Box m="0.25rem">
                  <BlogCard key={p.title} post={p}></BlogCard>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
}
