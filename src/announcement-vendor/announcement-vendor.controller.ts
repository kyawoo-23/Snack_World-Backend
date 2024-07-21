import { Controller, Get, Body, Param } from '@nestjs/common';
import { AnnouncementVendorService } from './announcement-vendor.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('announcement-vendor')
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
