import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const CreateInvoiceDto = z.object({
  vendor_name: z.string(),
  amount: z.number(),
  due_date: z.string(), // Consider a more appropriate type for dates
  description: z.string().optional(),
  user_id: z.number(),
  paid: z.boolean().optional(),
});

export type CreateInvoiceDto = z.infer<typeof CreateInvoiceDto>;

export class CreateInvoiceDtoClass {
  @ApiProperty({ example: 'Vendor 1' })
  vendor_name: string;

  @ApiProperty({ example: 100 })
  amount: number;

  @ApiProperty({ example: '2024-07-29T00:00:00.000Z' })
  due_date: string;

  @ApiProperty({ example: 'Invoice description', required: false })
  description?: string;

  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: false, required: false })
  paid?: boolean;
}
