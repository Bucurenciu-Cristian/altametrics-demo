import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [InvoicesService],
  controllers: [InvoicesController],
  imports: [PrismaModule],
})
export class InvoicesModule {}
