import { z } from 'zod';

export const couponSchema = z.object({
  code: z
    .string({
      required_error: "Código del cupón requerido",
    })
    .min(8, {
      message: "El código del cupón no puede ser tan corto",
    })
    .max(60, {
      message: "El código del cupón no puede exceder los 60 caracteres",
    }),
  discountType: z
    .string({
      required_error: "Tipo de descuento requerido",
    })
    .min(1, {
      message: "El tipo de descuento no puede estar vacío",
    })
    .max(20, {
      message: "El tipo de descuento no puede exceder los 20 caracteres",
    }),
  discountValue: z
    .number({
      required_error: "Valor del descuento requerido",
    })
    .positive({
      message: "El valor del descuento debe ser un número positivo",
    })
    .finite({
      message: "El valor del descuento debe ser un número finito",
    }),
  minOrderAmount: z
    .number()
    .optional()
    .positive({
      message: "El monto mínimo del pedido debe ser un número positivo",
    })
    .finite({
      message: "El monto mínimo del pedido debe ser un número finito",
    }),
  startDate: z
    .date({
      required_error: "Fecha de inicio requerida",
    }),
  endDate: z
    .date({
      required_error: "Fecha de finalización requerida",
    })
    .refine((date, ctx) => date > ctx.parent.startDate, {
      message: "La fecha de finalización debe ser posterior a la fecha de inicio",
    }),
  usageLimit: z
    .number()
    .optional()
    .int({
      message: "El límite de uso debe ser un número entero",
    })
    .nonnegative({
      message: "El límite de uso no puede ser negativo",
    }),
});