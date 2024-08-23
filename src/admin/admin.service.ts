import { Injectable } from '@nestjs/common';
import { Prisma, Admin } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload, AuthRequestDto } from 'src/common/auth.model';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _jwtService: JwtService,
  ) {}

  async create(
    createAdminDto: CreateAdminDto,
  ): Promise<Response<Partial<Admin>>> {
    try {
      const { adminRoleId, ...data } = createAdminDto;

      const res = await this._db.admin.create({
        omit: {
          password: true,
        },
        data: {
          ...data,
          password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10),
          adminRole: {
            connect: {
              adminRoleId,
            },
          },
        },
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

  async findAll(): Promise<Response<Partial<Admin>[]>> {
    try {
      const res = await this._db.admin.findMany({
        omit: {
          password: true,
        },
        include: {
          adminRole: true,
        },
      });

      if (res.length === 0) {
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

  async findOne(id: string): Promise<Response<Partial<Admin>>> {
    try {
      const res = await this._db.admin.findUnique({
        omit: {
          password: true,
        },
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
    updateAdminDto: UpdateAdminDto,
  ): Promise<Response<Partial<Admin>>> {
    try {
      let { adminRoleId, password, ...rest } = updateAdminDto;

      if (password) {
        password = await bcrypt.hash(password as string, 10);
      }

      const res = await this._db.admin.update({
        omit: {
          password: true,
        },
        where: {
          adminId: id,
        },
        data: {
          ...rest,
          ...(password && { password }),
          adminRole: {
            connect: {
              adminRoleId,
            },
          },
        },
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

  async toggleStatus(id: string): Promise<Response<Partial<Admin>>> {
    try {
      const admin = await this._db.admin.findUnique({
        omit: {
          password: true,
        },
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
        omit: {
          password: true,
        },
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
  ): Promise<Response<Partial<Admin>>> {
    try {
      const res = await this._db.admin.update({
        omit: {
          password: true,
        },
        where: {
          adminId: id,
        },
        data: {
          password: await bcrypt.hash(updatePasswordDto, 10),
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

  async resetPassword(id: string): Promise<Response<Partial<Admin>>> {
    try {
      const res = await this._db.admin.update({
        omit: {
          password: true,
        },
        where: {
          adminId: id,
        },
        data: {
          password: await bcrypt.hash(
            process.env.DEFAULT_PASSWORD as string,
            10,
          ),
        },
      });

      return {
        message: 'Password reset successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to reset password',
        error: error.message,
      };
    }
  }

  async profile(id: string): Promise<Response<Partial<Admin>>> {
    try {
      const res = await this._db.admin.findUnique({
        omit: {
          password: true,
        },
        where: {
          adminId: id,
        },
        include: {
          adminRole: true,
        },
      });

      if (!res) {
        return {
          message: 'Admin not found',
          data: null,
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

  async validateUser(authRequestDto: AuthRequestDto): Promise<Response<Admin>> {
    try {
      const { email, password } = authRequestDto;

      const user = await this._db.admin.findUnique({
        where: { email },
        include: {
          adminRole: true,
        },
      });

      if (user && (await bcrypt.compare(password, user.password))) {
        return {
          data: user,
        };
      }

      return {
        isSuccess: false,
        message: 'Invalid credentials',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to validate user',
        error: error.message,
      };
    }
  }

  async login(
    user: Admin,
  ): Promise<Response<AuthJwtPayload & { accessToken: string }>> {
    const payload: AuthJwtPayload = {
      name: user.name,
      email: user.email,
      sub: user.adminId,
      role: user.adminRoleId,
    };
    return {
      isSuccess: true,
      data: {
        ...payload,
        accessToken: this._jwtService.sign(payload),
      },
      message: 'Login successful',
    };
  }
}
