import { Injectable } from '@nestjs/common';
import { Delivery, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createDeliveryDto: Prisma.DeliveryCreateInput,
  ): Promise<Response<Delivery>> {
    try {
      const res = await this._db.delivery.create({
        data: createDeliveryDto,
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

  async findWithDate(date: string): Promise<Response<Delivery[]>> {
    try {
      const res = await this._db.delivery.findMany({
        where: {
          createAt: date,
        },
      });

      if (!res.length) {
        return {
          message: `No deliveries found for ${date}`,
          data: [],
        };
      }

      return {
        message: `Deliveries for ${date} fetched successfully`,
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: `Failed to fetch deliveries for ${date}`,
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
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch delivery',
        error: error.message,
      };
    }
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

  async updateStatus(id: string, status: string): Promise<Response<Delivery>> {
    try {
      const res = await this._db.delivery.update({
        where: {
          deliveryId: id,
        },
        data: {
          deliveryStatus: status,
        },
      });

      return {
        message: 'Delivery status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update delivery status',
        error: error.message,
      };
    }
  }

  async updateAssignee(
    id: string,
    assigneeId: string,
  ): Promise<Response<Delivery>> {
    try {
      const res = await this._db.delivery.update({
        where: {
          deliveryId: id,
        },
        data: {
          adminId: assigneeId,
        },
      });

      return {
        message: 'Delivery assignee updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update delivery assignee',
        error: error.message,
      };
    }
  }
}
