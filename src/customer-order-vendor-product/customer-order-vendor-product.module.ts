import { Module } from '@nestjs/common';
import { CustomerOrderVendorProductService } from './customer-order-vendor-product.service';
import { CustomerOrderVendorProductController } from './customer-order-vendor-product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CustomerOrderVendorProductController],
  providers: [CustomerOrderVendorProductService],
  imports: [DatabaseModule],
})
export class CustomerOrderVendorProductModule {}
