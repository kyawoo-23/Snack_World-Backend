import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  Headers,
  Query,
  Post,
} from '@nestjs/common';
import { CustomerOrderVendorService } from './customer-order-vendor.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('customer-order-vendor')
@Controller('customer-order-vendor')
export class CustomerOrderVendorController {
  constructor(
    private readonly customerOrderVendorService: CustomerOrderVendorService,
  ) {}

  @Get()
  findByVendor(
    @Headers('Vendor') vendorId: string,
    @Query()
    allQueryParams: { status?: string; startDate?: Date; endDate?: Date },
    // @Param() payload: GetCustomerVendorOrdersDTO,
  ) {
    return this.customerOrderVendorService.findByVendor(vendorId, {
      status: allQueryParams.status,
    });
  }

  @Post(':id/cancel')
  cancelOrder(@Param('id') id: string) {
    return this.customerOrderVendorService.cancelOrder(id);
  }

  @Get('all')
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
    @Body()
    updateCustomerOrderVendorDto: Prisma.CustomerOrderVendorUpdateInput,
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
