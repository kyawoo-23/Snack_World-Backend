import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { CustomerOrderVendorService } from './customer-order-vendor.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customer-order-vendor')
@Controller('customer-order-vendor')
export class CustomerOrderVendorController {
  constructor(
    private readonly customerOrderVendorService: CustomerOrderVendorService,
  ) {}

  @Get()
  findAll(@Body() status: string = 'ALL') {
    return this.customerOrderVendorService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerOrderVendorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerOrderVendorDto: Prisma.CustomerOrderVendorUpdateInput,
  ) {
    return this.customerOrderVendorService.update(
      id,
      updateCustomerOrderVendorDto,
    );
  }

  @Patch(':id/update-status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.customerOrderVendorService.updateStatus(id, status);
  }
}
