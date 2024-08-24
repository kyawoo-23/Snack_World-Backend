import { Injectable } from '@nestjs/common';
import { Prisma, Vendor } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs';
import { VendorUserRoleEnum } from 'prisma/seed';

@Injectable()
export class VendorService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createVendorDto: Prisma.VendorCreateInput,
  ): Promise<Response<Vendor>> {
    try {
      const res = await this._db.vendor.create({
        data: createVendorDto,
      });

      const vendorUserRole = await this._db.vendorUserRole.findUnique({
        where: { name: VendorUserRoleEnum.VENDOR_ADMINSTRATOR },
      });

      await this._db.vendorUser.create({
        data: {
          name: createVendorDto.name,
          email: createVendorDto.email,
          password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10),
          vendorUserRole: {
            connect: {
              vendorUserRoleId: vendorUserRole.vendorUserRoleId,
            },
          },
          vendor: {
            connect: {
              vendorId: res.vendorId,
            },
          },
        },
        omit: {
          password: true,
        },
      });

      return {
        message: 'Vendor created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create vendor',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Vendor[]>> {
    try {
      const res = await this._db.vendor.findMany();
      if (res.length === 0) {
        return {
          message: 'No vendors found',
          data: [],
        };
      }
      return {
        message: 'Vendors fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendors',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Vendor>> {
    try {
      const res = await this._db.vendor.findUnique({
        where: {
          vendorId: id,
        },
        include: {
          vendorUser: {
            include: {
              vendorUserRole: true,
            },
            omit: {
              password: true,
            },
          },
        },
      });

      if (!res) {
        return {
          message: 'Vendor not found',
          data: null,
        };
      }

      return {
        message: 'Vendor fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor',
        data: null,
      };
    }
  }

  async update(
    id: string,
    updateVendorDto: Prisma.VendorUpdateInput,
  ): Promise<Response<Vendor>> {
    try {
      const res = await this._db.vendor.update({
        where: {
          vendorId: id,
        },
        data: updateVendorDto,
      });

      return {
        message: 'Vendor updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor',
        data: null,
      };
    }
  }

  async toggleStatus(id: string): Promise<Response<Vendor>> {
    try {
      const vendor = await this._db.vendor.findUnique({
        where: {
          vendorId: id,
        },
      });

      if (!vendor) {
        return {
          message: 'Vendor not found',
          data: null,
        };
      }

      const res = await this._db.vendor.update({
        where: {
          vendorId: id,
        },
        data: {
          isActive: !vendor.isActive,
        },
      });

      return {
        message: 'Vendor status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor status',
        data: null,
      };
    }
  }
}
