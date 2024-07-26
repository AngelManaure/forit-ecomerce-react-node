import { z } from 'zod';

export const addressSchema = z.object({
    addressLine1: z.string({
      required_error: "Línea de dirección 1 requerida",
    }),
    addressLine2: z.string().optional(),
    city: z.string({
      required_error: "Ciudad requerida",
    }),
    state: z.string({
      required_error: "Estado requerido",
    }),
    postalCode: z.string({
      required_error: "Código postal requerido",
    }),
    country: z.string({
      required_error: "País requerido",
    }),
  });