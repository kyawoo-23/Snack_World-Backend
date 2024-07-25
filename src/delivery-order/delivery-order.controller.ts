import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryOrderService } from './delivery-order.service';
import { Prisma } from '@prisma/client';

@Controller('delivery-order')
export class DeliveryOrderController {
  constructor(private readonly deliveryOrderService: DeliveryOrderService) {}

  @Get()
  findAll() {
    return this.deliveryOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryOrderService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryOrderDto: Prisma.DeliveryOrderUpdateInput,
  ) {
    return this.deliveryOrderService.update(id, updateDeliveryOrderDto);
  }

  @Patch(':id/update-status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.deliveryOrderService.updateStatus(id, status);
  }
}
