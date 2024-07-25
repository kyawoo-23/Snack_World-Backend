import { Injectable } from '@nestjs/common';
import { DeliveryOrder, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DeliveryOrderService {
  constructor(private _db: DatabaseService) {}

  async findAll(): Promise<Response<DeliveryOrder[]>> {
    try {
      const res = await this._db.deliveryOrder.findMany({
        include: {
          delivery: true,
          customerOrderVendor: true,
        },
      });

      if (res.length === 0) {
        return {
          data: [],
          message: 'Delivery orders not found',
        };
      }
      return {
        message: 'Delivery orders fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch delivery orders',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<DeliveryOrder>> {
    try {
      const res = await this._db.deliveryOrder.findUnique({
        where: {
          deliveryOrderId: id,
        },
        include: {
          delivery: true,
          customerOrderVendor: {
            include: {
              customerOrder: true,
              vendor: true,
              customerOrderVendorProduct: {
                include: {
                  product: true,
                },
              },
            },
          },
        },
      });

      if (!res) {
        return {
          message: 'Delivery order not found',
        };
      }
      return {
        message: 'Delivery order fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch delivery order',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateDeliveryOrderDto: Prisma.DeliveryOrderUpdateInput,
  ): Promise<Response<DeliveryOrder>> {
    try {
      const res = await this._db.deliveryOrder.update({
        where: {
          deliveryOrderId: id,
        },
        data: updateDeliveryOrderDto,
      });

      return {
        message: 'Delivery order updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update delivery order',
        error: error.message,
      };
    }
  }

  async updateStatus(
    id: string,
    status: string,
  ): Promise<Response<DeliveryOrder>> {
    try {
      const res = await this._db.deliveryOrder.update({
        where: {
          deliveryOrderId: id,
        },
        data: {
          deliveryOrderStatus: status,
        },
      });

      return {
        message: 'Delivery order status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update delivery order status',
        error: error.message,
      };
    }
  }
}
