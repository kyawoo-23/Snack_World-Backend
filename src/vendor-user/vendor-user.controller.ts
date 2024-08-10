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
import { VendorUserService } from './vendor-user.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { UpdateVendorUserDto } from 'src/vendor-user/dto/update-vendor-user.dto';
import { AuthRequestDto } from 'src/common/auth.model';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('vendor-user')
@Controller('vendor-user')
export class VendorUserController {
  constructor(private readonly vendorUserService: VendorUserService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVendorUserDto: Prisma.VendorUserCreateInput) {
    return this.vendorUserService.create(createVendorUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.vendorUserService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req) {
    return this.vendorUserService.profile(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorUserService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVendorUserDto: UpdateVendorUserDto,
  ) {
    return this.vendorUserService.update(id, updateVendorUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.vendorUserService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/update-password')
  updatePassword(@Param('id') id: string, @Body() updatePasswordDto: string) {
    return this.vendorUserService.updatePassword(id, updatePasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/reset-password')
  resetPassword(@Param('id') id: string) {
    return this.vendorUserService.resetPassword(id);
  }

  @Post('login')
  async login(@Body() authRequestDto: AuthRequestDto) {
    const user = await this.vendorUserService.validateUser(authRequestDto);
    if (user.isSuccess === false) {
      return user;
    }
    return this.vendorUserService.login(user.data);
  }
}
