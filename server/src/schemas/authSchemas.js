import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Nombre de usuario requerido",
    })
    .min(8, {
      message: "El nombre de usuario debe contener al menos 8 caracteres",
    }),
  email: z
    .string({
      required_error: "Correo electrónico requerido",
    })
    .email({
      message: "Formato de correo inválido",
    }),
  firstName: z.string({
    required_error: "Nombre requerido",
  }),
  lastName: z.string({
    required_error: "Apellido requerido",
  }),
  age: z
    .number({
      required_error: "Edad requerida",
    })
    .min(18, {
      message: "Debe ser mayor de 18 años",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(8, {
      message: "La contraseña debe contener al menos 8 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo electrónico requerido",
    })
    .email({
      message: "Formato de correo inválido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(8, {
      message: "La contraseña debe contener al menos 8 caracteres",
    }),
});
