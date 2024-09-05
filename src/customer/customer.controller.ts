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
import { CustomerService } from './customer.service';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { AuthRequestDto } from 'src/common/auth.model';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: Prisma.CustomerCreateInput) {
    const user = await this.customerService.create(createCustomerDto);
    if (user.isSuccess === false) {
      return user;
    }

    return this.customerService.login(user.data);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findOne(@Req() req) {
    return this.customerService.findOne(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  update(@Req() req, @Body() updateCustomerDto: Prisma.CustomerUpdateInput) {
    return this.customerService.update(req.user.id, updateCustomerDto);
  }

  @Post('login')
  async login(@Body() authRequestDto: AuthRequestDto) {
    const user = await this.customerService.validateUser(authRequestDto);
    if (user.isSuccess === false) {
      return user;
    }
    return this.customerService.login(user.data);
  }
}
