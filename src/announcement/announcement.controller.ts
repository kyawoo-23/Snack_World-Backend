import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('announcement')
@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.create(createAnnouncementDto);
  }

  @Get()
  findAll(@Body() { type }: { type?: string }) {
    return this.announcementService.findAll(type);
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(id);
  }
}
