import { Module } from '@nestjs/common';
import { VendorRemarkService } from './vendor-remark.service';
import { VendorRemarkController } from './vendor-remark.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VendorRemarkController],
  providers: [VendorRemarkService],
  imports: [DatabaseModule],
})
export class VendorRemarkModule {}
