import { VStack, Input, InputGroup, InputLeftAddon, FormLabel, useToast, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "./Alert";
import Stats from "./Stats";

export  default function Inputs() {
  const toast = useToast();
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    toast({
      title: "Formulario enviado",
      status: "success",
      duration: 3000,
      isClosable: true
    });
    setData(data);
  };
  console.log(data);
  console.log(errors);

  return(
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
        <FormLabel textAlign="left">Nombre</FormLabel>
          <Input
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: "Ingrese un nombre",
              minLength:3,
              maxLength: 80
            })}
          />
          { errors.nombre && <AlertPop title={errors.nombre.message} />}
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            placeholder="Apellido"
            {...register("apellido", {
              required: "Ingrese un apellido",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.apellido && <AlertPop title={errors.apellido.message} />}
          <FormLabel>Rut</FormLabel>
          <Input
            type="text"
            placeholder="Rut"
            {...register("rut", {
              required: "Ingrese un rut",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.nombre && <AlertPop title={errors.rut.message} />}
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Ingrese un email",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.email && <AlertPop title={errors.email.message} />}
          <FormLabel>Telefono</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+56" />
            <Input type="tel" placeholder="Telefono"
            {...register("telefono", {
              required: "Ingrese un telefono"
            })} />
          </InputGroup>
          { errors.telefono && <AlertPop title={errors.telefono.message} />}
          <FormLabel>Direccion</FormLabel>
          <Input
            type="text"
            placeholder="Direccion"
            {...register("direccion", {
              required: "Ingrese una direccion",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.direccion && <AlertPop title={errors.direccion.message} />}
          <Button
            borderRadius="md"
            bg="cyan.600"
            _hover={{ bg: "cyan.200" }}
            variant="ghost"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </form>
      {data && (
        <Stats
          Nombre={data.nombre}
          Apellido={data.apellido}
          Rut={data.rut}
          Email={data.email}
          Telefono={data.telefono}
          Direccion={data.direccion}
        />
      )}
    </Box>
  );
}