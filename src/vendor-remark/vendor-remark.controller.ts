import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorRemarkService.findOne(id);
  }
}
