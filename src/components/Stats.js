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
          <StatLabel>Nombre: {props.nombre}</StatLabel>
          <StatLabel>Apeliido: {props.apellido}</StatLabel>
          <StatLabel>Rut: {props.rut}</StatLabel>
          <StatLabel>Email: {props.email}</StatLabel>
          <StatLabel>Telefono: {props.telefono}</StatLabel>
          <StatLabel>Direccion: {props.direccion}</StatLabel>
        </HStack>
      </Stack>
    </Stat>
  );
}
