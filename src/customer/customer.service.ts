import { Injectable } from '@nestjs/common';
import { Customer, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CustomerService {
  constructor(private _db: DatabaseService) {}

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
}
