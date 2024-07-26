import { z } from 'zod';

export const productSchema = z.object({
  title: z
    .string({
      required_error: "Título del producto requerido",
    })
    .min(8, {
      message: "El título del producto no puede ser tan corto",
    }),
  description: z
    .string({
      required_error: "Descripción del producto requerida",
    })
    .min(10, {
      message: "La descripción del producto debe contener al menos 10 caracteres",
    }),
  categoryId: z
    .number({
      required_error: "Categoría requerida",
    })
    .int({
      message: "Debes seleccionar una categoría para añadir el producto",
    }),
  price: z
    .number({
      required_error: "Precio del producto requerido",
    })
    .min(0.01, {
      message: "El precio debe ser mayor que 0",
    })
    .max(1000000, {
      message: "El precio no puede exceder 1,000,000",
    }),
  stock: z
    .number({
      required_error: "Cantidad del producto requerido",
    })
    .int({
      message: "La cantidad debe ser un número entero",
    })
    .min(0, {
      message: "La cantidad no puede ser negativa",
    }),
  image: z
    .string({
      required_error: "URL de la imagen requerida",
    })
    .url({
      message: "La URL de la imagen debe ser válida",
    }),
});