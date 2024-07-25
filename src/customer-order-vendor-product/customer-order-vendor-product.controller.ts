import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { CustomerOrderVendorProductService } from './customer-order-vendor-product.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customer-order-vendor-product')
@Controller('customer-order-vendor-product')
export class CustomerOrderVendorProductController {
  constructor(
    private readonly customerOrderVendorProductService: CustomerOrderVendorProductService,
  ) {}

  @Get()
  findAll(@Body() status: string = 'ALL') {
    return this.customerOrderVendorProductService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerOrderVendorProductService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateCustomerOrderVendorProductDto: Prisma.CustomerOrderVendorProductUpdateInput,
  ) {
    return this.customerOrderVendorProductService.update(
      id,
      updateCustomerOrderVendorProductDto,
    );
  }

  @Patch(':id/update-status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.customerOrderVendorProductService.updateStatus(id, status);
  }
}
