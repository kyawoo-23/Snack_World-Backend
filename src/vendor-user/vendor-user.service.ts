import { Injectable } from '@nestjs/common';
import { Prisma, VendorUser } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VendorUserService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createVendorUserDto: Prisma.VendorUserCreateInput,
  ): Promise<Response<VendorUser>> {
    try {
      const res = await this._db.vendorUser.create({
        data: createVendorUserDto,
      });

      return {
        message: 'Vendor user created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create vendor user',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<VendorUser[]>> {
    try {
      const res = await this._db.vendorUser.findMany({
        include: {
          vendorUserRole: true,
        },
      });
      if (res.length === 0) {
        return {
          message: 'No vendor users found',
          data: [],
        };
      }
      return {
        message: 'Vendor users fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor users',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<VendorUser>> {
    try {
      const res = await this._db.vendorUser.findUnique({
        where: {
          vendorUserId: id,
        },
        include: {
          vendorUserRole: true,
        },
      });

      if (!res) {
        return {
          message: 'Vendor user not found',
          data: null,
        };
      }

      return {
        message: 'Vendor user fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor user',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateVendorUserDto: Prisma.VendorUserUpdateInput,
  ): Promise<Response<VendorUser>> {
    try {
      const res = await this._db.vendorUser.update({
        where: {
          vendorUserId: id,
        },
        data: updateVendorUserDto,
      });

      return {
        message: 'Vendor user updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor user',
        error: error.message,
      };
    }
  }

  async toggleStatus(id: string): Promise<Response<VendorUser>> {
    try {
      const vendorUser = await this._db.vendorUser.findUnique({
        where: {
          vendorUserId: id,
        },
      });

      if (!vendorUser) {
        return {
          message: 'Vendor user not found',
          data: null,
        };
      }

      const res = await this._db.vendorUser.update({
        where: {
          vendorUserId: id,
        },
        data: {
          isActive: !vendorUser.isActive,
        },
      });

      return {
        message: 'Vendor user status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor user status',
        error: error.message,
      };
    }
  }

  async updatePassword(
    id: string,
    updatedPasswordDto: string,
  ): Promise<Response<VendorUser>> {
    try {
      const res = await this._db.vendorUser.update({
        where: {
          vendorUserId: id,
        },
        data: {
          password: updatedPasswordDto,
        },
      });

      return {
        message: 'Vendor user password updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor user password',
        error: error.message,
      };
    }
  }

  async resetPassword(id: string): Promise<Response<VendorUser>> {
    try {
      const res = await this._db.vendorUser.update({
        where: {
          vendorUserId: id,
        },
        data: {
          password: process.env.DEFAULT_PASSWORD,
        },
      });

      return {
        message: 'Vendor user password reset successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to reset vendor user password',
        error: error.message,
      };
    }
  }
}
