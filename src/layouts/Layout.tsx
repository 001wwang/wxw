import { Container } from "@chakra-ui/react";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container minW="30ch" maxW="100ch" p="1.5rem">
      {" "}
      {children}{" "}
    </Container>
  );
};

export default Layout;
