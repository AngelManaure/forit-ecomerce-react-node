import { z } from 'zod';

export const commentSchema = z.object({
  content: z
    .string({
      required_error: "Contenido del comentario requerido",
    })
    .min(5, {
      message: "El contenido del comentario no puede ser tan corto",
    }),
});