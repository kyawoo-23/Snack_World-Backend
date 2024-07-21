import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Response } from 'src/common/interceptors/response.interceptor';
import { Announcement } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnnouncementService {
  constructor(private _db: DatabaseService) {}

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Response<Announcement>> {
    try {
      const { vendorId, customerId, ...rest } = createAnnouncementDto;
      const res = await this._db.announcement.create({
        data: {
          ...rest,
          announcementVendor: vendorId
            ? {
                create: {
                  vendor: {
                    connect: { vendorId },
                  },
                },
              }
            : undefined,
          announcementCustomer: customerId
            ? {
                create: {
                  customer: {
                    connect: { customerId },
                  },
                },
              }
            : undefined,
        },
      });

      return {
        message: 'Announcement created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create announcement',
        error: error.message,
      };
    }
  }

  async findAll(type: string): Promise<Response<Announcement[]>> {
    try {
      if (!type) {
        const res = await this._db.announcement.findMany();
        return {
          message: 'All announcements fetched successfully',
          data: res,
        };
      }

      const res = await this._db.announcement.findMany({
        where: {
          type,
        },
      });

      if (!res) {
        return {
          data: [],
          message: 'Announcements not found',
        };
      }
      return {
        message: 'Announcements fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch announcements',
        error: error.message,
      };
    }
  }

  async findOne(id: string) {
    return this._db.announcement.findUnique({
      where: {
        announcementId: id,
      },
    });
  }
}
