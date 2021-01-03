import { extendTheme } from "@chakra-ui/react";
import { Z_BLOCK } from "zlib";

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  mdx: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      mt: "1rem",
      mb: "0.25rem",
    },
    h2: {
      mt: "1rem",
      mb: "0.5rem",
      lineHeight: 1.3,
      fontWeight: "semibold",
      fontSize: "1.5rem",
      letterSpacing: "-.025em",
      "& + h3": {
        mt: "1.5rem",
      },
    },
    h3: {
      mt: "0.75rem",
      mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.25rem",
      letterSpacing: "-.025em",
    },
    h4: {
      mt: "0.75rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem",
    },
    p: {
      mt: "1rem",
      lineHeight: 1.7,
    },
    a: {
      color: "teal.500",
      fontWeight: "semibold",
      transition: "color 0.15s",
      transitionTimingFunction: "ease-out",
      _hover: {
        color: "teal.600",
      },
    },
    ul: {
      mt: "1rem",
      ml: "1rem",
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: "0.25rem",
      },
    },
    code: {
      rounded: "md",
      fontSize: "0.875rem",
      lineHeight: "normal",
      display: "block",
      bg: "gray.100",
      p: "1rem",
    },
  },
});

export default theme;
