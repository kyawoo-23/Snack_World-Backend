import { Injectable } from '@nestjs/common';
import { AdminRole, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminRolesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    createAdminRoleDto: Prisma.AdminRoleCreateInput,
  ): Promise<Response<AdminRole>> {
    try {
      const res = await this.databaseService.adminRole.create({
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
      const res = await this.databaseService.adminRole.findMany();
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
    return this.databaseService.adminRole.findUnique({
      where: {
        adminRoleId: id,
      },
    });
  }

  async update(id: string, updateAdminRoleDto: Prisma.AdminRoleUpdateInput) {
    return this.databaseService.adminRole.update({
      where: {
        adminRoleId: id,
      },
      data: updateAdminRoleDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.adminRole.delete({
      where: {
        adminRoleId: id,
      },
    });
  }
}
