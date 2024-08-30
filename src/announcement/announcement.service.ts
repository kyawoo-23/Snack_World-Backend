import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Response } from 'src/common/interceptors/response.interceptor';
import { Announcement } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AnnouncementService {
  constructor(
    private _db: DatabaseService,
    private _mail: MailerService,
  ) {}

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Response<Announcement>> {
    try {
      let { vendorId, customerId, ...rest } = createAnnouncementDto;

      if (createAnnouncementDto.type === 'ALL') {
        vendorId = await this._db.vendor
          .findMany({
            select: {
              vendorId: true,
            },
          })
          .then((res) => res.map((vendor) => vendor.vendorId));

        customerId = await this._db.customer
          .findMany({
            select: {
              customerId: true,
            },
          })
          .then((res) => res.map((customer) => customer.customerId));
      }

      const vendorPromises = vendorId.map(async (id) => {
        const vendor = await this._db.vendor.findUnique({
          where: {
            vendorId: id,
          },
        });

        if (!vendor) {
          throw new Error(`Vendor with id ${id} not found`);
        }

        await this._mail.sendMail({
          from: 'Snack World <snackworld@gmail.com>',
          to: vendor.email,
          subject: createAnnouncementDto.title,
          text: createAnnouncementDto.content,
        });

        return {
          vendorId: id,
          vendorEmail: vendor.email,
        };
      });

      await Promise.all(vendorPromises);

      const customerPromises = customerId.map(async (id) => {
        const customer = await this._db.customer.findUnique({
          where: {
            customerId: id,
          },
        });

        if (!customer) {
          throw new Error(`Customer with id ${id} not found`);
        }

        await this._mail.sendMail({
          from: 'Snack World <snackworld@gmail.com>',
          to: customer.email,
          subject: createAnnouncementDto.title,
          text: createAnnouncementDto.content,
        });

        return {
          customerId: id,
          customerEmail: customer.email,
        };
      });

      await Promise.all(customerPromises);

      const announcementData = {
        ...rest,
        announcementVendor:
          vendorId.length > 0
            ? {
                create: vendorId.map((id) => ({
                  vendor: {
                    connect: { vendorId: id },
                  },
                })),
              }
            : undefined,
        announcementCustomer:
          customerId.length > 0
            ? {
                create: customerId.map((id) => ({
                  customer: {
                    connect: { customerId: id },
                  },
                })),
              }
            : undefined,
      };

      const res = await this._db.announcement.create({
        data: announcementData,
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
        const res = await this._db.announcement.findMany({
          include: {
            announcementCustomer: {
              include: {
                customer: true,
              },
            },
            announcementVendor: {
              include: {
                vendor: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
        return {
          message: 'All announcements fetched successfully',
          data: res,
        };
      }

      const res = await this._db.announcement.findMany({
        where: {
          type,
        },
        include: {
          announcementCustomer: {
            include: {
              customer: true,
            },
          },
          announcementVendor: {
            include: {
              vendor: true,
            },
          },
        },
      });

      if (res.length === 0) {
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
