import { Injectable } from '@nestjs/common';
import { Customer, Prisma } from '@prisma/client';
import { AuthJwtPayload, AuthRequestDto } from 'src/common/auth.model';
import { Response } from 'src/common/interceptors/response.interceptor';
import * as bcrypt from 'bcryptjs';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomerService {
  constructor(
    private _db: DatabaseService,
    private readonly _jwtService: JwtService,
  ) {}

  async create(
    createCustomerDto: Prisma.CustomerCreateInput,
  ): Promise<Response<Customer>> {
    try {
      const res = await this._db.customer.create({
        data: createCustomerDto,
      });
      return {
        message: 'Customer created successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error creating customer',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Customer[]>> {
    try {
      const res = await this._db.customer.findMany();
      if (res.length === 0) {
        return {
          data: [],
          message: 'Customers not found',
        };
      }

      return {
        message: 'Customers fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error fetching customers',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Customer>> {
    try {
      const res = await this._db.customer.findUnique({
        where: {
          customerId: id,
        },
      });

      if (!res) {
        return {
          data: null,
          message: 'Customer not found',
        };
      }

      return {
        message: 'Customer fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error fetching customer',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateCustomerDto: Prisma.CustomerUpdateInput,
  ): Promise<Response<Customer>> {
    try {
      const res = await this._db.customer.update({
        where: {
          customerId: id,
        },
        data: updateCustomerDto,
      });

      return {
        message: 'Customer updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error updating customer',
        error: error.message,
      };
    }
  }

  async validateUser(
    authRequestDto: AuthRequestDto,
  ): Promise<Response<Customer>> {
    try {
      const { email, password } = authRequestDto;

      const user = await this._db.customer.findUnique({
        where: { email },
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
    user: Customer,
  ): Promise<Response<AuthJwtPayload & { accessToken: string }>> {
    const payload: AuthJwtPayload = {
      name: user.name,
      email: user.email,
      sub: user.customerId,
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
