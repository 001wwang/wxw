import { Container } from "@chakra-ui/react";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW="100ch" w={["90%", "", "", "100%"]} p="1.5rem">
      {" "}
      {children}{" "}
    </Container>
  );
};

export default Layout;
