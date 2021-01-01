import { MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import type { Post } from "../pages/index";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Flex p="0.25rem" direction="column" minW="30ch">
      <Link href={"/blog/" + post.slug}>
        <Heading size="md">{post.title}</Heading>
      </Link>

      <Stack direction="row">
        <Text fontWeight="bold" color="gray.400">
          {post.date.slice(4)}
        </Text>
        {post.tags.map((t) => {
          return (
            <Text key={post.slug} color="green.400">
              {t}
            </Text>
          );
        })}
      </Stack>
      <Text mt="0.5rem">{post.desc}</Text>
    </Flex>
  );
};

export default PostCard;
