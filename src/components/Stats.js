import {
  Heading,
  HStack,
  Stack,
  Stat,
  StatLabel
} from "@chakra-ui/react";
import React from "react";

export default function Stats(props) {
  return (
    <Stat mt={5}>
      <Heading my={2} as="h4" fontSize="20px">
        Formulario recepcionado
      </Heading>
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <HStack>
          <StatLabel>Nombre: {props.Nombre}</StatLabel>
          <StatLabel>Apeliido: {props.Apellido}</StatLabel>
          <StatLabel>Rut: {props.Rut}</StatLabel>
        </HStack>
        <HStack>
          <StatLabel>Email: {props.Email}</StatLabel>
          <StatLabel>Telefono: {props.Telefono}</StatLabel>
        </HStack>
        <HStack>
          <StatLabel>Direccion: {props.Direccion}</StatLabel>
        </HStack>
      </Stack>
    </Stat>
  );
}
