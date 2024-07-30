import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDtoClass } from './dto/create-invoice.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('invoices')
@ApiBearerAuth()
@Controller('invoices')
@UseGuards(AuthGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Invoice successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createInvoiceDto: CreateInvoiceDtoClass) {
    return this.invoicesService.create(createInvoiceDto);
  }
  @Get('total')
  @ApiResponse({
    status: 200,
    description: 'Aggregated total amount by due date.',
  })
  aggregateTotal() {
    return this.invoicesService.aggregateTotal();
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieved all invoices.' })
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retrieved the specified invoice.' })
  @ApiResponse({ status: 404, description: 'Invoice not found.' })
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(+id);
  }
}
