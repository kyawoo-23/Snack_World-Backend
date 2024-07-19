import { Module } from '@nestjs/common';
import { AnnouncementVendorService } from './announcement-vendor.service';
import { AnnouncementVendorController } from './announcement-vendor.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AnnouncementVendorController],
  providers: [AnnouncementVendorService],
  imports: [DatabaseModule],
})
export class AnnouncementVendorModule {}
