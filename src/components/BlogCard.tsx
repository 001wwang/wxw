import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import type { Post } from "../pages/index";

interface Props {
  post: Post;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <Flex p="1rem" direction="column">
      <Flex
        w="100%"
        direction={["column", "row", "row"]}
        justify="space-between"
      >
        <Link href={"/blog/" + post.slug}>
          <Heading size="md">{post.title}</Heading>
        </Link>
      </Flex>
      <HStack>
        <Text fontWeight="bold" color="gray.400">
          {post.date}
        </Text>
        {post.tags.map((t) => {
          return (
            <Text size="xs" color="gray.400">
              {t}
            </Text>
          );
        })}
      </HStack>
      <br></br>
      <Text>{post.desc}</Text>
      <br></br>
    </Flex>
  );
};

export default BlogCard;
