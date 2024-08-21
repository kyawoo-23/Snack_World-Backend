import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';
import { AuthRequestDto } from 'src/common/auth.model';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAdminDto: Prisma.AdminCreateInput) {
    return this.adminService.create(createAdminDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.adminService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/update-password')
  updatePassword(@Param('id') id: string, @Body() updatePasswordDto: string) {
    return this.adminService.updatePassword(id, updatePasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req) {
    return this.adminService.profile(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/reset-password')
  resetPassword(@Param('id') id: string) {
    return this.adminService.resetPassword(id);
  }

  @Post('login')
  async login(@Body() authRequestDto: AuthRequestDto) {
    const user = await this.adminService.validateUser(authRequestDto);
    if (user.isSuccess === false) {
      return user;
    }
    return this.adminService.login(user.data);
  }
}
