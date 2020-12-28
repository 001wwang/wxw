import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  LinkBox,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <Flex
      justifyContent="center"
      w="100%"
      boxShadow="md"
      h="4rem"
      ml="auto"
      mr="auto"
    >
      <Flex
        w="100%"
        maxW="1024px"
        h="100%"
        p="1.5rem"
        alignItems="center"
        justify="space-between"
      >
        <LinkBox href="/">
          <Flex w="30%" align="center">
            <Image mr="0.25em" boxSize="3rem" src="/assets/will.svg"></Image>
            <Text fontWeight="bold">WXW</Text>
          </Flex>
        </LinkBox>

        <Flex
          w="100%"
          display={["none", "", "flex"]}
          justify="flex-end"
          alignItems="center"
        >
          <HStack spacing="1.5rem">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </HStack>
        </Flex>

        <Flex display={["flex", "", "none"]}>
          <Menu>
            <MenuButton as={Button}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>About</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
