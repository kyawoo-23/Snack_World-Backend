import { Injectable } from '@nestjs/common';
import { Prisma, Admin } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createAdminDto: Prisma.AdminCreateInput,
  ): Promise<Response<Admin>> {
    try {
      const res = await this._db.admin.create({
        data: createAdminDto,
      });
      return {
        message: 'Admin created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create admin',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Admin[]>> {
    try {
      const res = await this._db.admin.findMany();

      if (!res) {
        return {
          data: [],
          message: 'Admins not found',
        };
      }
      return {
        message: 'Admin fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch admin',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Admin>> {
    try {
      const res = await this._db.admin.findUnique({
        where: {
          adminId: id,
        },
        include: {
          adminRole: true,
        },
      });
      return {
        message: 'Admin fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch admin',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateAdminDto: Prisma.AdminUpdateInput,
  ): Promise<Response<Admin>> {
    try {
      const res = await this._db.admin.update({
        where: {
          adminId: id,
        },
        data: updateAdminDto,
      });
      return {
        message: 'Admin updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update admin',
        error: error.message,
      };
    }
  }

  async toggleStatus(id: string): Promise<Response<Admin>> {
    try {
      const admin = await this._db.admin.findUnique({
        where: {
          adminId: id,
        },
      });

      if (!admin) {
        return {
          isSuccess: false,
          message: 'Admin not found',
        };
      }

      const res = await this._db.admin.update({
        where: {
          adminId: id,
        },
        data: {
          isActive: !admin.isActive,
        },
      });

      return {
        message: 'Admin status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update admin status',
        error: error.message,
      };
    }
  }

  async updatePassword(
    id: string,
    updatePasswordDto: string,
  ): Promise<Response<Admin>> {
    try {
      const res = await this._db.admin.update({
        where: {
          adminId: id,
        },
        data: {
          password: updatePasswordDto,
        },
      });

      return {
        message: 'Password updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update password',
        error: error.message,
      };
    }
  }
}
