import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';
import { Delivery, Prisma } from '@prisma/client';

@Injectable()
export class DeliveryService {
  constructor(private _db: DatabaseService) {}

  async create(
    createDeliveryDto: CreateDeliveryDto,
  ): Promise<Response<Delivery>> {
    try {
      const { adminId, deliverOrder, ...data } = createDeliveryDto;
      const res = await this._db.delivery.create({
        data: {
          ...data,
          admin: {
            connect: {
              adminId,
            },
          },
          deliveryOrder: {
            create: deliverOrder.map(({ customerOrderVendorId, ...order }) => ({
              ...order,
              customerOrderVendor: {
                connect: {
                  customerOrderVendorId,
                },
              },
            })),
          },
        },
      });
      return {
        message: 'Delivery created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create delivery',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Delivery[]>> {
    try {
      const res = await this._db.delivery.findMany();

      if (res.length === 0) {
        return {
          data: [],
          message: 'Deliveries not found',
        };
      }
      return {
        message: 'Deliveries fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch deliveries',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Delivery>> {
    try {
      const res = await this._db.delivery.findUnique({
        where: {
          deliveryId: id,
        },
        include: {
          admin: true,
          deliveryOrder: true,
        },
      });

      if (!res) {
        return {
          message: 'Delivery not found',
          data: res,
        };
      }

      return {
        message: 'Delivery fetched successfully',
        data: res,
      };
    } catch (error) {}
  }

  async update(
    id: string,
    updateDeliveryDto: Prisma.DeliveryUpdateInput,
  ): Promise<Response<Delivery>> {
    try {
      const res = await this._db.delivery.update({
        where: {
          deliveryId: id,
        },
        data: updateDeliveryDto,
      });

      return {
        message: 'Delivery updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update delivery',
        error: error.message,
      };
    }
  }
}
