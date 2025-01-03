import { Injectable } from '@nestjs/common';
import { Prisma, VendorRemark } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';

@Injectable()
export class VendorRemarkService {
  constructor(private readonly _db: DatabaseService) {}

  async create(createVendorRemarkDto: {
    content: string;
    vendorId: string;
  }): Promise<Response<VendorRemark>> {
    try {
      const res = await this._db.vendorRemark.create({
        data: {
          content: createVendorRemarkDto.content,
          vendor: {
            connect: {
              vendorId: createVendorRemarkDto.vendorId,
            },
          },
        },
      });

      return {
        message: 'Vendor remark created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create vendor remark',
        error: error.message,
      };
    }
  }

  async findAll({
    startDate,
    endDate,
  }: {
    startDate: Date;
    endDate: Date;
  }): Promise<Response<VendorRemark[]>> {
    try {
      const endOfEndDate = new Date(endDate);
      endOfEndDate.setHours(23, 59, 59, 999);

      const res = await this._db.vendorRemark.findMany({
        where: {
          createdAt: {
            gte: new Date(startDate),
            lte: endOfEndDate,
          },
        },
        include: {
          vendor: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return {
        message: 'Vendor remark report fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor remark',
        error: error.message,
      };
    }
  }

  async findOne(vendorId: string): Promise<Response<VendorRemark[]>> {
    try {
      const res = await this._db.vendorRemark.findMany({
        where: {
          vendorId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return {
        message: 'Vendor remark fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor remark',
        error: error.message,
      };
    }
  }
}
