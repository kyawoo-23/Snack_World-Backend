import { Injectable } from '@nestjs/common';
import { DeliveryOrder, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';
import { CreateDeliveryOrderDto } from 'src/delivery-order/dto/create-delivery-order.dto';

@Injectable()
export class DeliveryOrderService {
  constructor(private _db: DatabaseService) {}

  async create(
    createDeliveryOrderDto: CreateDeliveryOrderDto,
  ): Promise<Response<DeliveryOrder>> {
    try {
      const { customerOrderId, customerOrderVendorId, ...data } =
        createDeliveryOrderDto;

      // Check stock for each product variant
      const products = await this._db.customerOrderVendorProduct.findMany({
        where: {
          customerOrderVendorId,
        },
      });

      const stockCheckPromises = products.map(async (product) => {
        const productVariant = await this._db.productVariant.findUnique({
          where: {
            productVariantId: product.productVariantId,
          },
        });

        if (!productVariant || productVariant.stock < product.quantity) {
          throw new Error(
            `Insufficient stock for ${product.productName} - ${product.variantName}`,
          );
        }
      });

      // Wait for all stock checks to complete
      try {
        await Promise.all(stockCheckPromises);
      } catch (error) {
        return {
          isSuccess: false,
          message: error.message,
          error: error,
        };
      }

      const res = await this._db.deliveryOrder.create({
        data: {
          ...data,
          customerOrderVendor: {
            connect: {
              customerOrderVendorId,
            },
          },
        },
      });

      const vendor = await this._db.customerOrderVendor.update({
        where: {
          customerOrderVendorId,
        },
        data: {
          customerOrderVendorStatus: 'ACCEPTED',
        },
      });

      await this._db.customerOrderVendorProduct.updateMany({
        where: {
          customerOrderVendorId,
        },
        data: {
          orderVendorProductStatus: 'ACCEPTED',
        },
      });

      // Check if all CustomerOrderVendor statuses are not ACCEPTED or NEW
      const customerOrderVendors = await this._db.customerOrderVendor.findMany({
        where: {
          customerOrderId,
        },
      });

      const noNew = customerOrderVendors.every(
        (vendor) => vendor.customerOrderVendorStatus !== 'NEW',
      );

      if (noNew) {
        await this._db.customerOrder.update({
          where: {
            customerOrderId,
          },
          data: {
            orderStatus: 'CONFIRMED',
          },
        });
      }

      return {
        message: 'Delivery order created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create delivery order',
        error: error.message,
      };
    }
  }

  async start(deliveryOrderId: string): Promise<Response<DeliveryOrder>> {
    try {
      const STATUS = 'DELIVERING';

      const deliveryOrder = await this._db.deliveryOrder.findUnique({
        where: { deliveryOrderId },
        include: { delivery: true },
      });

      const res = await this._db.deliveryOrder.update({
        where: { deliveryOrderId },
        data: {
          deliveryOrderStatus: STATUS,
          customerOrderVendor: {
            update: {
              customerOrderVendorStatus: STATUS,
            },
          },
          // Conditionally include delivery update data if delivery exists
          ...(deliveryOrder.delivery && {
            delivery: {
              update: {
                deliveryStatus: STATUS,
              },
            },
          }),
        },
        include: {
          customerOrderVendor: {
            include: {
              customerOrder: true,
            },
          },
          delivery: true,
        },
      });

      const { customerOrderId } = res.customerOrderVendor;

      await this._db.customerOrder.update({
        where: {
          customerOrderId,
        },
        data: {
          orderStatus: STATUS,
        },
      });

      // Check if all CustomerOrderVendor statuses are not ACCEPTED or NEW
      // const customerOrderVendors = await this._db.customerOrderVendor.findMany({
      //   where: {
      //     customerOrderId,
      //   },
      // });

      // const noVendorsAcceptedOrNew = customerOrderVendors.every(
      //   (vendor) =>
      //     vendor.customerOrderVendorStatus !== 'NEW' &&
      //     vendor.customerOrderVendorStatus !== 'ACCEPTED',
      // );

      // if (noVendorsAcceptedOrNew) {
      //   await this._db.customerOrder.update({
      //     where: {
      //       customerOrderId,
      //     },
      //     data: {
      //       orderStatus: STATUS,
      //     },
      //   });
      // }

      return {
        message: 'Delivery order started successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to start delivery order',
        error: error.message,
      };
    }
  }

  async end(deliveryOrderId: string): Promise<Response<DeliveryOrder>> {
    try {
      const STATUS = 'DELIVERED';

      // Update the delivery order and associated customer order vendor status
      const deliveryOrder = await this._db.deliveryOrder.update({
        where: {
          deliveryOrderId,
        },
        data: {
          deliveryOrderStatus: STATUS,
          customerOrderVendor: {
            update: {
              customerOrderVendorStatus: STATUS,
            },
          },
        },
        include: {
          customerOrderVendor: {
            include: {
              customerOrder: true,
              customerOrderVendorProduct: true, // Include delivered products
            },
          },
          delivery: true,
        },
      });

      const { customerOrderId } = deliveryOrder.customerOrderVendor;
      const deliveryId = deliveryOrder.delivery?.deliveryId;

      // Check if all CustomerOrderVendor statuses are DELIVERED or CANCELLED
      const customerOrderVendors = await this._db.customerOrderVendor.findMany({
        where: {
          customerOrderId,
        },
      });

      const allVendorsDeliveredOrCancelled = customerOrderVendors.every(
        (vendor) =>
          vendor.customerOrderVendorStatus === STATUS ||
          vendor.customerOrderVendorStatus === 'CANCELLED',
      );

      if (allVendorsDeliveredOrCancelled) {
        await this._db.customerOrder.update({
          where: {
            customerOrderId,
          },
          data: {
            orderStatus: STATUS,
          },
        });
      }

      // Check if all DeliveryOrders with the same deliveryId are DELIVERED
      const deliveryOrders = await this._db.deliveryOrder.findMany({
        where: {
          deliveryId,
        },
      });

      const allDeliveryOrdersDelivered = deliveryOrders.every(
        (order) => order.deliveryOrderStatus === STATUS,
      );

      if (allDeliveryOrdersDelivered) {
        await this._db.delivery.update({
          where: {
            deliveryId,
          },
          data: {
            deliveryStatus: STATUS,
          },
        });
      }

      // Reduce the stock for each product variant in the delivered order
      const deliveredProducts =
        deliveryOrder.customerOrderVendor.customerOrderVendorProduct;
      for (const product of deliveredProducts) {
        await this._db.productVariant.update({
          where: {
            productVariantId: product.productVariantId,
          },
          data: {
            stock: {
              decrement: product.quantity, // Reduce stock by delivered quantity
            },
          },
        });
      }

      return {
        message: 'Delivery order ended successfully',
        data: deliveryOrder,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to end delivery order',
        error: error.message,
      };
    }
  }

  async findAll({
    type = 'ALL',
    status = 'NEW',
    startDate,
    endDate,
  }: {
    type: 'ALL' | 'SELF' | 'REQUEST';
    status: 'NEW' | 'DELIVERING' | 'DELIVERED' | 'ALL';
    startDate?: Date;
    endDate?: Date;
  }): Promise<Response<DeliveryOrder[]>> {
    try {
      const query: any = {
        include: {
          delivery: {
            include: {
              admin: true,
            },
          },
          customerOrderVendor: {
            include: {
              customerOrderVendorProduct: true,
              customerOrder: {
                include: {
                  customer: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      };

      if (type !== 'ALL') {
        query.where = { type };
      }

      if (status !== 'ALL') {
        query.where = { ...query.where, deliveryOrderStatus: status };
      }

      const endOfEndDate = new Date(endDate);
      endOfEndDate.setHours(23, 59, 59, 999);

      if (startDate && endDate) {
        query.where = {
          ...query.where,
          createdAt: {
            gte: new Date(startDate),
            lte: endOfEndDate,
          },
        };
      }

      const res = await this._db.deliveryOrder.findMany(query);

      if (res.length === 0) {
        return {
          data: [],
          message: 'Delivery orders not found',
        };
      }
      return {
        message: 'Delivery orders report fetched successfully',
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
