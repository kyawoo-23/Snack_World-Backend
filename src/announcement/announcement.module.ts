import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
  imports: [DatabaseModule],
})
export class AnnouncementModule {}
