import { Module } from '@nestjs/common';
import { AnnouncementCustomerService } from './announcement-customer.service';
import { AnnouncementCustomerController } from './announcement-customer.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AnnouncementCustomerController],
  providers: [AnnouncementCustomerService],
  imports: [DatabaseModule],
})
export class AnnouncementCustomerModule {}
