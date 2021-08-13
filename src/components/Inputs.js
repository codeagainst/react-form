import {  VStack, Input, FormLabel, Box, Button } from "@chakra-ui/react";
import React from "react";
import { Formik } from "formik"
import { checkRut, prettifyRut, formatRut } from "react-rut-formatter";
import AlertPop from "./Alert";
//import Stats from "./Stats";

export  default function Inputs() {


  return(
    <Box>
    <Formik
      initialValues={{
        nombre:"",
        apellido:"",
        rut:"",
        email:"",
        telefono:"",
        direccion:""
        }}
      validate={(values) => {
        const errors = {};

          if (!values.nombre) {
            errors.nombre ="Ingrese un nombre";
          } else if (values.nombre.length > 15) {
            errors.nombre = 'Debe contener 15 caracteres o menos';
          }

          if (!values.apellido) {
            errors.apellido = "Ingrese un apellido";
          } else if (values.apellido.length > 20) {
            errors.apellido = 'Debe contener 20 caracteres o menos';
          }

          if (!values.email) {
            errors.email = "Ingrese un email";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Correo invalido';
          }

          if (!values.rut) {
            errors.rut = "Se requiere un RUT";
          } else if (!checkRut(values.rut)) {
            errors.rut = "RUT inválido";
          }

          if (!values.telefono) {
            errors.telefono = "Ingrese un telefono valido";
          } else if (values.telefono.length > 9) {
            errors.telefono = 'Debe contener 9 caracteres o menos';
          }

          if (!values.direccion) {
            errors.direccion = "Ingrese un direccion";
          } else if (values.direccion.length > 20) {
            errors.direccion = 'Debe contener 20 caracteres o menos';
          }

          return errors;
      }}
      onSubmit={(values) => {
        const rut = formatRut(values.rut);

          console.log(rut);
          console.log(values)
        }}
    >
      {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
          <VStack>
          <FormLabel textAlign="left">Nombre</FormLabel>
            <Input
              id="nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
            { errors.nombre && <AlertPop title={errors.nombre} />}
            <FormLabel>Apellido</FormLabel>
            <Input
              id="apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
            />
            { errors.apellido && <AlertPop title={errors.apellido} />}
            <FormLabel>Rut</FormLabel>
            <Input
              id="rut"
              name="rut"
              value={values.rut}
              onChange={handleChange}
              onBlur={(event) => {
                const formatted = prettifyRut(values.rut);
                setFieldValue("rut", formatted);

                handleBlur(event);
              }}
            />
            {errors.rut && touched.rut && <AlertPop title={errors.rut} />}
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            { errors.email && <AlertPop title={errors.email} />}
            <FormLabel>Telefono</FormLabel>
            <Input
              id="telefono"
              name="telefono"
              value={values.telefono}
              onChange={handleChange}
            />
            { errors.telefono && <AlertPop title={errors.telefono} />}
            <FormLabel>Direccion</FormLabel>
            <Input
              id="direccion"
              name="direccion"
              value={values.direccion}
              onChange={handleChange}
            />
            { errors.direccion && <AlertPop title={errors.direccion} />}
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
        )}
    </Formik>
    </Box>
  );
}