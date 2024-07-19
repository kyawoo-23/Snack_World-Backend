import { Controller, Get, Body, Param } from '@nestjs/common';
import { AnnouncementVendorService } from './announcement-vendor.service';

@Controller('announcement-vendor')
export class AnnouncementVendorController {
  constructor(
    private readonly announcementVendorService: AnnouncementVendorService,
  ) {}

  @Get()
  findAll(@Body() { vendorId }: { vendorId: string }) {
    return this.announcementVendorService.findAll(vendorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementVendorService.findOne(id);
  }
}
