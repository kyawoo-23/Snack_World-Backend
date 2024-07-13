import { Injectable } from '@nestjs/common';
import { Prisma, VendorUserRole } from '@prisma/client';
import { find } from 'rxjs';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VendorUserRolesService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createVendorUserRoleDto: Prisma.VendorUserRoleCreateInput,
  ): Promise<Response<VendorUserRole>> {
    try {
      const res = await this._db.vendorUserRole.create({
        data: createVendorUserRoleDto,
      });

      return {
        message: 'Vendor user role created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create vendor user role',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<VendorUserRole[]>> {
    try {
      const res = await this._db.vendorUserRole.findMany();

      if (!res) {
        return {
          message: 'No vendor user roles found',
          data: [],
        };
      }

      return {
        message: 'Vendor user roles fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor user roles',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<VendorUserRole>> {
    try {
      const res = await this._db.vendorUserRole.findUnique({
        where: {
          vendorUserRoleId: id,
        },
      });

      if (!res) {
        return {
          message: 'Vendor user role not found',
          data: null,
        };
      }

      return {
        message: 'Vendor user role fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch vendor user role',
        data: null,
      };
    }
  }

  async update(
    id: string,
    updateVendorUserRoleDto: Prisma.VendorUserRoleUpdateInput,
  ): Promise<Response<VendorUserRole>> {
    try {
      const res = await this._db.vendorUserRole.update({
        where: {
          vendorUserRoleId: id,
        },
        data: updateVendorUserRoleDto,
      });

      return {
        message: 'Vendor user role updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update vendor user role',
        data: null,
      };
    }
  }
}
