import "../App.css";
import {Heading, Box, Flex} from "@chakra-ui/react"
import Form from "./Form";

export default function App() {
  return (
    <Flex width="full" align="center" justifyContent="center">
    <Box
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        p={8}
        maxWidth="600px"
        my={10}
    >
      <Heading as="h1">Formulario AlterCap</Heading>
      <Form />
    </Box>
    </Flex>
  );
}