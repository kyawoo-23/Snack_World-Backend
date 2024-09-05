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
import { CustomerOrderService } from './customer-order.service';
import { CreateCustomerOrderDto } from './dto/create-customer-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('customer Order')
@Controller('customer-order')
export class CustomerOrderController {
  constructor(private readonly customerOrderService: CustomerOrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createCustomerOrderDto: CreateCustomerOrderDto) {
    return this.customerOrderService.create(
      req.user.id,
      createCustomerOrderDto,
    );
  }

  @Get()
  findAll() {
    return this.customerOrderService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  findUserOrders(@Req() req) {
    return this.customerOrderService.findUserOrders(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerOrderService.findOne(id);
  }

  @Patch(':id/update-status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.customerOrderService.updateStatus(id, status);
  }
}
