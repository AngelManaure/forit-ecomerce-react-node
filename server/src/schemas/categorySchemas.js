import { z } from 'zod';

export const categorySchema = z.object({
    name: z
    .string({
      required_error: "Nombre de la categoría requerido",
    })
    .min(1, {
      message: "El nombre de la categoría no puede estar vacío",
    }),
});