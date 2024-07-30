import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const { vendor_name, amount, due_date, description, user_id, paid } =
      createInvoiceDto;
    return this.prisma.invoice.create({
      data: {
        vendor_name,
        amount,
        due_date: new Date(due_date),
        description,
        user: { connect: { id: user_id } },
        paid,
      },
    });
  }

  async findAll() {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id: id },
    });
  }

  async aggregateTotal() {
    return this.prisma.invoice.groupBy({
      by: ['due_date'],
      _sum: {
        amount: true,
      },
    });
  }
}
