import { Injectable } from '@nestjs/common';
import { AnnouncementVendor } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnnouncementVendorService {
  constructor(private _db: DatabaseService) {}

  async findAll(vendorId: string): Promise<Response<AnnouncementVendor[]>> {
    try {
      const res = await this._db.announcementVendor.findMany({
        where: {
          vendorId,
        },
        include: {
          announcement: true,
        },
      });
      return {
        message: 'Announcement fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch announcement vendors',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<AnnouncementVendor>> {
    try {
      const res = await this._db.announcementVendor.findUnique({
        where: {
          announcementVendorId: id,
        },
        include: {
          announcement: true,
        },
      });
      return {
        message: 'Announcement details fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch announcement details',
        error: error.message,
      };
    }
  }
}
