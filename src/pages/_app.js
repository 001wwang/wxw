import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <title>Will Wang</title>
      </header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
