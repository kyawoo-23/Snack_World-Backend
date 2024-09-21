import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { VendorRemarkService } from './vendor-remark.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendor-remark')
@Controller('vendor-remark')
export class VendorRemarkController {
  constructor(private readonly vendorRemarkService: VendorRemarkService) {}

  @Post()
  create(@Body() createVendorRemarkDto: { content: string; vendorId: string }) {
    return this.vendorRemarkService.create(createVendorRemarkDto);
  }

  @Get()
  findAll(@Query() payload: { startDate: Date; endDate: Date }) {
    return this.vendorRemarkService.findAll({
      startDate: payload.startDate,
      endDate: payload.endDate,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorRemarkService.findOne(id);
  }
}
