import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DeliveryService } from 'src/delivery/delivery.service';

@ApiTags('delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  create(@Body() createDeliveryDto: Prisma.DeliveryCreateInput) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  findWithDate(@Body() date: string) {
    return this.deliveryService.findWithDate(date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryDto: Prisma.DeliveryUpdateInput,
  ) {
    return this.deliveryService.update(id, updateDeliveryDto);
  }

  @Patch(':id/update-status')
  updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.deliveryService.updateStatus(id, status);
  }

  @Patch(':id/update-assignee')
  updateAssignee(@Param('id') id: string, @Body() assigneeId: string) {
    return this.deliveryService.updateAssignee(id, assigneeId);
  }
}
