import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VendorPurchaseService } from './vendor-purchase.service';
import { CreateVendorPurchaseDto } from 'src/vendor-purchase/dto/create-vendor-purchase.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendor-purchase')
@Controller('vendor-purchase')
export class VendorPurchaseController {
  constructor(private readonly vendorPurchaseService: VendorPurchaseService) {}

  @Post()
  create(@Body() createVendorPurchaseDto: CreateVendorPurchaseDto) {
    return this.vendorPurchaseService.create(createVendorPurchaseDto);
  }

  @Get()
  findAll() {
    return this.vendorPurchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorPurchaseService.findOne(id);
  }
}
