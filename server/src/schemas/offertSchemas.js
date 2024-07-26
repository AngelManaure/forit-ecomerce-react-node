import { z } from 'zod';

export const offerSchema = z.object({
  title: z
    .string({
      required_error: "Título de la oferta requerido",
    })
    .min(1, {
      message: "El título de la oferta no puede estar vacío",
    }),
  description: z
    .string({
      required_error: "Descripción de la oferta requerida",
    })
    .min(10, {
      message: "La descripción de la oferta debe contener al menos 10 caracteres",
    }),
  discountType: z
    .string({
      required_error: "Tipo de descuento requerido",
    })
    .min(1, {
      message: "El tipo de descuento no puede estar vacío",
    }),
  discountValue: z
    .number({
      required_error: "Valor del descuento requerido",
    })
    .min(0.01, {
      message: "El valor del descuento debe ser mayor que 0",
    })
    .max(1000000, {
      message: "El valor del descuento no puede exceder 1,000,000",
    }),
  startDate: z
    .date({
      required_error: "Fecha de inicio requerida",
    })
    .refine(date => date >= new Date(), {
      message: "La fecha de inicio no puede ser en el pasado",
    }),
  endDate: z
    .date({
      required_error: "Fecha de finalización requerida",
    })
    .refine(date => date > new Date(), {
      message: "La fecha de finalización debe ser una fecha futura",
    })
    .refine((endDate, context) => {
      const startDate = context.parent?.startDate;
      return startDate ? endDate > startDate : true;
    }, {
      message: "La fecha de finalización debe ser después de la fecha de inicio",
    }),
  minOrderAmount: z
    .number({
      required_error: "Monto mínimo de pedido requerido",
    })
    .optional()
    .min(0.01, {
      message: "El monto mínimo de pedido debe ser mayor que 0",
    }),
  applicableToCategories: z
    .array(z.number(), {
      required_error: "Categorías aplicables requeridas",
    })
    .min(1, {
      message: "Debe seleccionar al menos una categoría aplicable",
    }),
});