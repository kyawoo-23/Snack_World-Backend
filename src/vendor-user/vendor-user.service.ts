import { Injectable } from '@nestjs/common';
import { Prisma, Vendor, VendorUser } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';
import { UpdateVendorUserDto } from 'src/vendor-user/dto/update-vendor-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload, AuthRequestDto } from 'src/common/auth.model';

@Injectable()
export class VendorUserService {
  constructor(
    private readonly _db: DatabaseService,
    private readonly _jwtService: JwtService,
  ) {}

  async create(
    createVendorUserDto: Prisma.VendorUserCreateInput,
  ): Promise<Response<Partial<VendorUser>>> {
    try {
      const res = await this._db.vendorUser.create({
        data: {
          ...createVendorUserDto,
          password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10),
        },
        omit: {
          password: true,
        },
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

  async findAll(): Promise<Response<Partial<VendorUser>[]>> {
    try {
      const res = await this._db.vendorUser.findMany({
        omit: {
          password: true,
        },
        include: {
          vendorUserRole: true,
        },
        orderBy: {
          createdAt: 'desc',
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

  async findOne(id: string): Promise<Response<Partial<VendorUser>>> {
    try {
      const res = await this._db.vendorUser.findUnique({
        omit: {
          password: true,
        },
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
    updateVendorUserDto: UpdateVendorUserDto,
  ): Promise<Response<Partial<VendorUser>>> {
    try {
      const { vendorUserRoleId, ...rest } = updateVendorUserDto;

      if (rest.password) {
        rest.password = await bcrypt.hash(rest.password as string, 10);
      }

      const res = await this._db.vendorUser.update({
        where: {
          vendorUserId: id,
        },
        omit: {
          password: true,
        },
        data: {
          ...rest,
          vendorUserRole: {
            connect: {
              vendorUserRoleId,
            },
          },
        },
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

  async toggleStatus(id: string): Promise<Response<Partial<VendorUser>>> {
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
        omit: {
          password: true,
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
  ): Promise<Response<Partial<VendorUser>>> {
    try {
      const res = await this._db.vendorUser.update({
        omit: {
          password: true,
        },
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

  async resetPassword(id: string): Promise<Response<Partial<VendorUser>>> {
    try {
      const res = await this._db.vendorUser.update({
        omit: {
          password: true,
        },
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

  async profile(id: string): Promise<Response<Partial<VendorUser>>> {
    try {
      const res = await this._db.vendorUser.findUnique({
        omit: {
          password: true,
        },
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

  async validateUser(
    authRequestDto: AuthRequestDto,
  ): Promise<Response<VendorUser>> {
    try {
      const { email, password } = authRequestDto;

      const user = await this._db.vendorUser.findUnique({
        where: { email },
        include: {
          vendorUserRole: true,
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
    user: VendorUser,
  ): Promise<Response<AuthJwtPayload & { accessToken: string }>> {
    const payload: AuthJwtPayload = {
      name: user.name,
      email: user.email,
      sub: user.vendorUserId,
      role: user.vendorUserRoleId,
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
