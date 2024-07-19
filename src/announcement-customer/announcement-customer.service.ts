import { Injectable } from '@nestjs/common';
import { AnnouncementCustomer } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnnouncementCustomerService {
  constructor(private _db: DatabaseService) {}

  async findAll(customerId: string): Promise<Response<AnnouncementCustomer[]>> {
    try {
      const res = await this._db.announcementCustomer.findMany({
        where: {
          customerId,
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
        message: 'Failed to fetch announcement customers',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<AnnouncementCustomer>> {
    try {
      const res = await this._db.announcementCustomer.findUnique({
        where: {
          announcementCustomerId: id,
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
