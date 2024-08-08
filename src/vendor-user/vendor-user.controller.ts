import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { VendorUserService } from './vendor-user.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendor-user')
@Controller('vendor-user')
export class VendorUserController {
  constructor(private readonly vendorUserService: VendorUserService) {}

  @Post()
  create(@Body() createVendorUserDto: Prisma.VendorUserCreateInput) {
    return this.vendorUserService.create(createVendorUserDto);
  }

  @Get()
  findAll() {
    return this.vendorUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorUserService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendorUserDto: Prisma.VendorUserUpdateInput,
  ) {
    return this.vendorUserService.update(id, updateVendorUserDto);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.vendorUserService.toggleStatus(id);
  }

  @Patch(':id/update-password')
  updatePassword(@Param('id') id: string, @Body() updatePasswordDto: string) {
    return this.vendorUserService.updatePassword(id, updatePasswordDto);
  }

  @Patch(':id/reset-password')
  resetPassword(@Param('id') id: string) {
    return this.vendorUserService.resetPassword(id);
  }
}
