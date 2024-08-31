import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { AuthRequestDto } from 'src/common/auth.model';

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
    console.log('HELLOOOOOOOOOOOO', user);
    return this.customerService.login(user.data);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: Prisma.CustomerUpdateInput,
  ) {
    return this.customerService.update(id, updateCustomerDto);
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
