import { VStack, Input, InputGroup, InputLeftAddon, useToast, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./Alert";
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
          <Input
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: "Ingrese un nombre",
              minLength:3,
              maxLength: 80
            })}
          />
          { errors.nombre && <Alert title={errors.nombre.message} />}
          <Input
            type="text"
            placeholder="Apellido"
            {...register("apellido", {
              required: "Ingrese un apellido",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.apellido && <Alert title={errors.apellido.message} />}
          <Input
            type="text"
            placeholder="Rut"
            {...register("rut", {
              required: "Ingrese un nombre",
              minLength:6,
              maxLength: 9
            })}
          />
          { errors.rut && <Alert title={errors.rut.message} />}
          <Input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Ingrese un email",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.email && <Alert title={errors.email.message} />}
          <InputGroup>
            <InputLeftAddon children="+56" />
            <Input type="tel" placeholder="Telefono"
            {...register("telefono", {
              required: "Ingrese un telefono"
            })} />
          </InputGroup>
          { errors.telefono && <Alert title={errors.telefono.message} />}
          <Input
            type="text"
            placeholder="Direccion"
            {...register("direccion", {
              required: "Ingrese una direccion",
              minLength:3,
              maxLength: 100
            })}
          />
          { errors.direccion && <Alert title={errors.direccion.message} />}
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