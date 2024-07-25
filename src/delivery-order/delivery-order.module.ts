import { Module } from '@nestjs/common';
import { DeliveryOrderService } from './delivery-order.service';
import { DeliveryOrderController } from './delivery-order.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DeliveryOrderController],
  providers: [DeliveryOrderService],
  imports: [DatabaseModule],
})
export class DeliveryOrderModule {}
