import { z } from 'zod';

export const offerSchema = z.object({
  title: z.string({
    required_error: "Título de la oferta requerido",
  }).min(1, {
    message: "El título de la oferta no puede estar vacío",
  }),
  description: z.string({
    required_error: "Descripción de la oferta requerida",
  }).min(1, {
    message: "La descripción de la oferta no puede estar vacía",
  }),
  discountType: z.string({
    required_error: "Tipo de descuento requerido",
  }).min(1, {
    message: "El tipo de descuento no puede estar vacío",
  }),
  discountValue: z.number({
    required_error: "Valor del descuento requerido",
  }).positive({
    message: "El valor del descuento debe ser positivo",
  }),
  startDate: z.string({
    required_error: "Fecha de inicio requerida",
  }).refine((date) => !isNaN(Date.parse(date)), {
    message: "Fecha de inicio inválida",
  }),
  endDate: z.string({
    required_error: "Fecha de finalización requerida",
  }).refine((date) => !isNaN(Date.parse(date)), {
    message: "Fecha de finalización inválida",
  }),
  minOrderAmount: z.number().optional(),
  applicableToCategories: z.array(z.number()).optional(),
});