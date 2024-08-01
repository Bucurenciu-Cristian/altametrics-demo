import { z } from 'zod';

export const invoiceSchema = z.object({
  vendor_name: z.string().min(1),
  amount: z.number().positive(),
  due_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  description: z.string().optional(),
  user_id: z.number().int().positive(),
  paid: z.boolean(),
});
