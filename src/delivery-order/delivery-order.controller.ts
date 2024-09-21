import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DeliveryOrderService } from './delivery-order.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';
import { CreateDeliveryOrderDto } from 'src/delivery-order/dto/create-delivery-order.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('delivery-order')
@Controller('delivery-order')
export class DeliveryOrderController {
  constructor(private readonly deliveryOrderService: DeliveryOrderService) {}

  @Post()
  create(@Body() createDeliveryOrderDto: CreateDeliveryOrderDto) {
    return this.deliveryOrderService.create(createDeliveryOrderDto);
  }

  @Post(':id/start')
  start(@Param('id') id: string) {
    return this.deliveryOrderService.start(id);
  }

  @Post(':id/end')
  end(@Param('id') id: string) {
    return this.deliveryOrderService.end(id);
  }

  @Get()
  findAll(
    @Query()
    allQueryParams: {
      type?: 'SELF' | 'REQUEST' | 'ALL';
      status?: 'NEW' | 'DELIVERING' | 'DELIVERED' | 'ALL';
      startDate?: Date;
      endDate?: Date;
    },
  ) {
    return this.deliveryOrderService.findAll({
      status: allQueryParams.status,
      type: allQueryParams.type,
      startDate: allQueryParams.startDate,
      endDate: allQueryParams.endDate,
    });
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
