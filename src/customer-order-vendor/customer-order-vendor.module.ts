import { Module } from '@nestjs/common';
import { CustomerOrderVendorService } from './customer-order-vendor.service';
import { CustomerOrderVendorController } from './customer-order-vendor.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CustomerOrderVendorController],
  providers: [CustomerOrderVendorService],
  imports: [DatabaseModule],
})
export class CustomerOrderVendorModule {}
