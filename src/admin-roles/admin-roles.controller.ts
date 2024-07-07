import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminRolesService } from './admin-roles.service';
import { Prisma } from '@prisma/client';

@Controller('admin-roles')
export class AdminRolesController {
  constructor(private readonly adminRolesService: AdminRolesService) {}

  @Post()
  create(@Body() createAdminRoleDto: Prisma.AdminRoleCreateInput) {
    return this.adminRolesService.create(createAdminRoleDto);
  }

  @Get()
  findAll() {
    return this.adminRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminRolesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdminRoleDto: Prisma.AdminRoleUpdateInput,
  ) {
    return this.adminRolesService.update(id, updateAdminRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminRolesService.remove(id);
  }
}
