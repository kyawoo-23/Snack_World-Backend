import { Module } from '@nestjs/common';
import { CustomerOrderService } from './customer-order.service';
import { CustomerOrderController } from './customer-order.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CustomerOrderController],
  providers: [CustomerOrderService],
  imports: [DatabaseModule],
})
export class CustomerOrderModule {}
