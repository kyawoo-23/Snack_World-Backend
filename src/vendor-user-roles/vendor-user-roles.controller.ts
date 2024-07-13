import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { VendorUserRolesService } from './vendor-user-roles.service';
import { Prisma } from '@prisma/client';

@Controller('vendor-user-roles')
export class VendorUserRolesController {
  constructor(
    private readonly vendorUserRolesService: VendorUserRolesService,
  ) {}

  @Post()
  create(@Body() createVendorUserRoleDto: Prisma.VendorUserRoleCreateInput) {
    return this.vendorUserRolesService.create(createVendorUserRoleDto);
  }

  @Get()
  findAll() {
    return this.vendorUserRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorUserRolesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendorUserRoleDto: Prisma.VendorUserRoleUpdateInput,
  ) {
    return this.vendorUserRolesService.update(id, updateVendorUserRoleDto);
  }
}
