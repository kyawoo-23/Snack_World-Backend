import { Customer, CustomerOrderVendorProduct, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CustomerOrderVendorProductService {
  constructor(private _db: DatabaseService) {}

  async findAll(
    status: string,
  ): Promise<Response<CustomerOrderVendorProduct[]>> {
    try {
      let res: CustomerOrderVendorProduct[] = [];
      if (status === 'ALL') {
        res = await this._db.customerOrderVendorProduct.findMany({
          include: {
            productVariant: true,
            product: true,
          },
        });
      } else {
        res = await this._db.customerOrderVendorProduct.findMany({
          where: {
            orderVendorProductStatus: status,
          },
          include: {
            productVariant: true,
            product: true,
          },
        });
      }

      if (res.length === 0) {
        return {
          data: [],
          message: 'No customer order vendor products found',
        };
      }

      return {
        data: res,
        message: 'Customer order vendors retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message:
          'Error occurred while retrieving customer order vendor products',
      };
    }
  }
  async findOne(id: string): Promise<Response<CustomerOrderVendorProduct>> {
    try {
      const res = await this._db.customerOrderVendorProduct.findUnique({
        where: {
          customerOrderVendorProductId: id,
        },
        include: {
          productVariant: true,
          product: true,
        },
      });

      if (!res) {
        return {
          data: null,
          message: 'Customer order vendor product not found',
        };
      }

      return {
        data: res,
        message: 'Customer order vendor product retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message:
          'Error occurred while retrieving customer order vendor product',
      };
    }
  }

  async update(
    id: string,
    updateCustomerOrderVendorProductDto: Prisma.CustomerOrderVendorProductUpdateInput,
  ): Promise<Response<CustomerOrderVendorProduct>> {
    try {
      const res = await this._db.customerOrderVendorProduct.update({
        where: {
          customerOrderVendorProductId: id,
        },
        data: updateCustomerOrderVendorProductDto,
      });

      return {
        data: res,
        message: 'Customer order vendor product updated successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while updating customer order vendor product',
      };
    }
  }

  async updateStatus(
    id: string,
    status: string,
  ): Promise<Response<CustomerOrderVendorProduct>> {
    try {
      const res = await this._db.customerOrderVendorProduct.update({
        where: {
          customerOrderVendorProductId: id,
        },
        data: {
          orderVendorProductStatus: status,
        },
      });

      return {
        data: res,
        message: 'Customer order vendor product status updated successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message:
          'Error occurred while updating customer order vendor product status',
      };
    }
  }
}
