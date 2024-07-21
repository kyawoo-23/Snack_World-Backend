import { Module } from '@nestjs/common';
import { VendorPurchaseService } from './vendor-purchase.service';
import { VendorPurchaseController } from './vendor-purchase.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VendorPurchaseController],
  providers: [VendorPurchaseService],
  imports: [DatabaseModule],
})
export class VendorPurchaseModule {}
