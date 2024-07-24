import { Injectable } from '@nestjs/common';
import { CreateCustomerOrderDto } from './dto/create-customer-order.dto';
import { DatabaseService } from 'src/database/database.service';
import { CustomerOrder } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';

@Injectable()
export class CustomerOrderService {
  constructor(private _db: DatabaseService) {}

  async create(
    createCustomerOrderDto: CreateCustomerOrderDto,
  ): Promise<Response<CustomerOrder>> {
    try {
      const { vendors, customerId, ...data } = createCustomerOrderDto;
      const res = await this._db.customerOrder.create({
        data: {
          ...data,
          customer: {
            connect: { customerId },
          },
          customerOrderVendor: {
            create: vendors.map(({ vendorId, products, ...vendor }) => ({
              ...vendor,
              vendor: {
                connect: { vendorId },
              },
              customer: {
                connect: { customerId },
              },
              customerOrderVendorProduct: {
                create: products.map(
                  ({ productId, productVariantId, ...product }) => ({
                    ...product,
                    vendorName: vendor.vendorName,
                    product: {
                      connect: { productId: productId },
                    },
                    productVariant: {
                      connect: { productVariantId },
                    },
                  }),
                ),
              },
            })),
          },
        },
      });

      return {
        message: 'Customer order created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error creating customer order',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<CustomerOrder[]>> {
    try {
      const res = await this._db.customerOrder.findMany();

      if (!res.length) {
        return {
          message: 'No customer orders found',
          data: res,
        };
      }

      return {
        message: 'Customer orders fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error fetching customer orders',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<CustomerOrder>> {
    try {
      const res = await this._db.customerOrder.findUnique({
        where: { customerOrderId: id },
      });

      if (!res) {
        return {
          message: 'Customer order not found',
          data: res,
        };
      }

      return {
        message: 'Customer order fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error fetching customer order',
        error: error.message,
      };
    }
  }

  async updateStatus(
    id: string,
    status: string,
  ): Promise<Response<CustomerOrder>> {
    try {
      const res = await this._db.customerOrder.update({
        where: { customerOrderId: id },
        data: { orderStatus: status },
      });

      return {
        message: 'Customer order status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error updating customer order status',
        error: error.message,
      };
    }
  }
}
