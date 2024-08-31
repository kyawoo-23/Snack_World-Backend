import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendor')
@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post()
  create(@Body() createVendorDto: Prisma.VendorCreateInput) {
    return this.vendorService.create(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(id);
  }

  @Patch('update-logo')
  updateLogo(
    @Headers('Vendor') vendorId: string,
    @Body() { image }: { image: string },
  ) {
    return this.vendorService.updateLogo({
      id: vendorId,
      image,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendorDto: Prisma.VendorUpdateInput,
  ) {
    return this.vendorService.update(id, updateVendorDto);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.vendorService.toggleStatus(id);
  }
}
