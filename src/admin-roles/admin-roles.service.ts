import { Injectable } from '@nestjs/common';
import { AdminRole, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminRolesService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createAdminRoleDto: Prisma.AdminRoleCreateInput,
  ): Promise<Response<AdminRole>> {
    try {
      const res = await this._db.adminRole.create({
        data: createAdminRoleDto,
      });
      return {
        message: 'Admin role created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create admin role',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<AdminRole[]>> {
    try {
      const res = await this._db.adminRole.findMany();

      if (res.length === 0) {
        return {
          data: [],
          message: 'Admin roles not found',
        };
      }
      return {
        message: 'Admin roles fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch admin roles',
        error: error.message,
      };
    }
  }

  async findOne(id: string) {
    return this._db.adminRole.findUnique({
      where: {
        adminRoleId: id,
      },
    });
  }

  async update(id: string, updateAdminRoleDto: Prisma.AdminRoleUpdateInput) {
    return this._db.adminRole.update({
      where: {
        adminRoleId: id,
      },
      data: updateAdminRoleDto,
    });
  }

  async remove(id: string) {
    return this._db.adminRole.delete({
      where: {
        adminRoleId: id,
      },
    });
  }
}
