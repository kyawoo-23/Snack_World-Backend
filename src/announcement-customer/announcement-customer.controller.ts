import { Controller, Get, Body, Param } from '@nestjs/common';
import { AnnouncementCustomerService } from './announcement-customer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('announcement-customer')
@Controller('announcement-customer')
export class AnnouncementCustomerController {
  constructor(
    private readonly announcementCustomerService: AnnouncementCustomerService,
  ) {}

  @Get()
  findAll(@Body() { customerId }: { customerId: string }) {
    return this.announcementCustomerService.findAll(customerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementCustomerService.findOne(id);
  }
}
