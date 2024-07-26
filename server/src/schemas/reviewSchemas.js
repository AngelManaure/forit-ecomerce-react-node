import { z } from 'zod';

export const reviewSchema = z.object({
  content: z
    .string({
      required_error: "Contenido de la reseña requerido",
    })
    .min(8, {
      message: "El contenido de la reseña no puede ser tan corto",
    }),
  rating: z
    .number({
      required_error: "Calificación requerida",
    })
    .int({
      message: "La calificación debe ser un número entero",
    })
    .min(1, {
      message: "La calificación debe ser al menos 1",
    })
    .max(5, {
      message: "La calificación no puede ser mayor a 5",
    }),
});