import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: Prisma.AdminCreateInput) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdminDto: Prisma.AdminUpdateInput,
  ) {
    return this.adminService.update(id, updateAdminDto);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.adminService.toggleStatus(id);
  }

  @Patch(':id/update-password')
  updatePassword(@Param('id') id: string, @Body() updatePasswordDto: string) {
    return this.adminService.updatePassword(id, updatePasswordDto);
  }
}
