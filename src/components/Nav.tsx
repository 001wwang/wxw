import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Router from "next/dist/next-server/lib/router/router";
import Link from "next/link";

import { NavItems } from "../config/nav";

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <Flex justify="center" w="100%" boxShadow="md" h="4rem" ml="auto" mr="auto">
      <Flex
        maxW="1024px"
        w="100%"
        h="100%"
        p="1.5rem"
        alignItems="center"
        justify="space-between"
      >
        <a href="/">
          <Flex w="30%" align="center">
            <img
              height="80"
              width="80"
              alt="Drawing of Will's face icon"
              src="/assets/will.svg"
            ></img>
            <Text ml="1em" fontWeight="bold">
              WXW
            </Text>
          </Flex>
        </a>

        <Flex
          w="100%"
          display={["none", "", "flex"]}
          justify="flex-end"
          alignItems="center"
        >
          <HStack spacing="1.5rem">
            {NavItems.map((e) => (
              <Link key={e.label} href={e.ref}>
                {e.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        <Box display={["flex", "", "none"]}>
          <Menu>
            <MenuButton>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              {NavItems.map((e) => (
                <MenuItem
                  key={e.label}
                  onClick={() => {
                    location.href = e.ref;
                  }}
                >
                  {e.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
