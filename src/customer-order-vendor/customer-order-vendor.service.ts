import { Injectable } from '@nestjs/common';
import {
  CustomerOrderVendor,
  CustomerOrderVendorProduct,
  Prisma,
  Product,
} from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CustomerOrderVendorService {
  constructor(private _db: DatabaseService) {}

  async findAll(status: string): Promise<Response<CustomerOrderVendor[]>> {
    try {
      const query = {
        include: {
          customerOrder: true,
          vendor: true,
          customer: true,
          customerOrderVendorProduct: true,
          deliveryOrder: true,
        },
      };

      if (status !== 'ALL') {
        query['where'] = {
          customerOrderVendorStatus: status,
        };
      }

      const customerOrderVendors =
        await this._db.customerOrderVendor.findMany(query);

      if (customerOrderVendors.length === 0) {
        return {
          data: [],
          message: 'No customer order vendors found',
        };
      }

      return {
        data: customerOrderVendors,
        message: 'Customer order vendors retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while retrieving customer order vendors',
      };
    }
  }

  async cancelOrder(
    customerOrderVendorId: string,
  ): Promise<Response<CustomerOrderVendor>> {
    try {
      const STATUS = 'CANCELLED';
      const customerOrderVendor = await this._db.customerOrderVendor.update({
        where: {
          customerOrderVendorId,
        },
        data: {
          customerOrderVendorStatus: STATUS,
          customerOrderVendorProduct: {
            updateMany: {
              where: {
                customerOrderVendorId,
              },
              data: {
                orderVendorProductStatus: STATUS,
              },
            },
          },
        },
        include: {
          customerOrder: true,
          customerOrderVendorProduct: true,
        },
      });

      // Check if all CustomerOrder statuses are CANCELLED
      const customerOrderId = customerOrderVendor.customerOrderId;

      const customerOrderVendors = await this._db.customerOrderVendor.findMany({
        where: {
          customerOrderId,
        },
      });

      const allCustomerOrderVendorsCancelled = customerOrderVendors.every(
        (vendor) => vendor.customerOrderVendorStatus === STATUS,
      );

      if (allCustomerOrderVendorsCancelled) {
        await this._db.customerOrder.update({
          where: {
            customerOrderId,
          },
          data: {
            orderStatus: STATUS,
          },
        });
      }

      return {
        data: customerOrderVendor,
        message: 'Customer order vendor cancelled successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while cancelling customer order vendor',
      };
    }
  }

  async findByVendor(
    vendorId: string,
    { status = 'ALL', startDate, endDate }: GetCustomerVendorOrdersDTO,
  ): Promise<Response<CustomerOrderVendor[]>> {
    try {
      const customerOrderVendors = await this._db.customerOrderVendor.findMany({
        where: {
          vendorId,
          ...(status !== 'ALL' && { customerOrderVendorStatus: status }),
        },
        include: {
          customerOrder: true,
          vendor: true,
          customer: true,
        },
        orderBy: {
          customerOrder: {
            createdAt: 'desc',
          },
        },
      });

      if (customerOrderVendors.length === 0) {
        return {
          data: [],
          message: 'No customer order vendors found',
        };
      }

      return {
        data: customerOrderVendors,
        message: 'Customer order vendors retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while retrieving customer order vendors',
      };
    }
  }

  async findOne(id: string): Promise<Response<CustomerOrderVendor>> {
    try {
      const customerOrderVendor = await this._db.customerOrderVendor.findUnique(
        {
          where: {
            customerOrderVendorId: id,
          },
          include: {
            customerOrder: true,
            vendor: true,
            customer: true,
            customerOrderVendorProduct: true,
            deliveryOrder: true,
          },
        },
      );

      return {
        data: customerOrderVendor,
        message: 'Customer order vendor details retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message:
          'Error occurred while retrieving customer order vendor details',
      };
    }
  }

  async update(
    id: string,
    updateCustomerOrderVendorDto: Prisma.CustomerOrderVendorUpdateInput,
  ): Promise<Response<CustomerOrderVendor>> {
    const customerOrderVendor = await this._db.customerOrderVendor.update({
      where: {
        customerOrderVendorId: id,
      },
      data: updateCustomerOrderVendorDto,
    });

    return {
      data: customerOrderVendor,
      message: 'Customer order vendor details updated successfully',
    };
  }

  async updateStatus(
    id: string,
    status: string,
  ): Promise<Response<CustomerOrderVendor>> {
    try {
      const customerOrderVendor = await this._db.customerOrderVendor.update({
        where: {
          customerOrderVendorId: id,
        },
        data: {
          customerOrderVendorStatus: status,
        },
      });

      return {
        data: customerOrderVendor,
        message: 'Customer order vendor status updated successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while updating customer order vendor status',
      };
    }
  }

  async getSalesReport(dto: SalesReportDto): Promise<
    Response<{
      totalSales: number;
      totalProductsSold: number;
      totalOrders: number;
      rejectedOrders: number;
      selfDeliveryOrders: number;
      requestDeliveryOrders: number;
      orders: CustomerOrderVendor[];
    }>
  > {
    try {
      const { vendorId, startDate, endDate } = dto;
      // Fetch the report based on vendorId and date range
      const report = await this._db.customerOrderVendor.findMany({
        where: {
          vendorId,
          customerOrder: {
            createdAt: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        },
        include: {
          customer: true,
          customerOrder: true,
          deliveryOrder: true,
          customerOrderVendorProduct: true,
        },
        orderBy: {
          customerOrder: {
            createdAt: 'desc',
          },
        },
      });

      if (report.length === 0) {
        return {
          data: {
            totalSales: 0,
            totalProductsSold: 0,
            rejectedOrders: 0,
            totalOrders: 0,
            selfDeliveryOrders: 0,
            requestDeliveryOrders: 0,
            orders: [],
          },
          message: 'No sales report found',
        };
      }

      // Aggregate total sales and total quantity sold
      const totalSales = report.reduce((acc, order) => {
        return (
          acc +
          order.customerOrderVendorProduct.reduce((sum, product) => {
            return product.orderVendorProductStatus === 'ACCEPTED'
              ? sum + product.quantity * product.price
              : 0;
          }, 0)
        );
      }, 0);

      const totalProductsSold = report.reduce((acc, order) => {
        return (
          acc +
          order.customerOrderVendorProduct.reduce((sum, product) => {
            return product.orderVendorProductStatus === 'ACCEPTED'
              ? sum + product.quantity
              : 0;
          }, 0)
        );
      }, 0);

      let totalOrders = report.length;
      let rejectedOrders = 0;
      let selfDeliveryOrders = 0;
      let requestDeliveryOrders = 0;

      report.map((order) => {
        if (order.customerOrderVendorStatus === 'CANCELLED') {
          rejectedOrders++;
        } else if (order.deliveryOrder.length > 0) {
          if (order.deliveryOrder[0].type === 'SELF') {
            selfDeliveryOrders++;
          } else if (order.deliveryOrder[0].type === 'REQUEST') {
            requestDeliveryOrders++;
          }
        }
      });

      return {
        data: {
          totalSales,
          totalOrders,
          rejectedOrders,
          totalProductsSold,
          selfDeliveryOrders,
          requestDeliveryOrders,
          orders: report,
        },
        message: 'Sales report retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while retrieving sales report',
      };
    }
  }

  getSoldProductsReport = async (
    dto: SalesReportDto,
  ): Promise<Response<CustomerOrderVendorProduct[]>> => {
    try {
      const { vendorId, startDate, endDate } = dto;

      const soldProductsReport = await this._db.customerOrderVendor.findMany({
        where: {
          vendorId: vendorId,
          customerOrderVendorStatus: 'DELIVERED',
          customerOrder: {
            createdAt: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        },
        include: {
          customerOrderVendorProduct: true,
        },
      });

      if (soldProductsReport.length === 0) {
        return {
          data: [],
          message: 'No sold products report found',
        };
      }

      const products = soldProductsReport
        .map((order) => {
          return order.customerOrderVendorProduct.map((product) => {
            return {
              ...product,
            };
          });
        })
        .flat();

      const uniqueProducts = products
        .reduce((acc: CustomerOrderVendorProduct[], product) => {
          const existingProduct = acc.find(
            (p) => p.productVariantId === product.productVariantId,
          );

          if (existingProduct) {
            existingProduct.quantity += product.quantity;
            existingProduct.price =
              (existingProduct.price * existingProduct.quantity +
                product.price * product.quantity) /
              (existingProduct.quantity + product.quantity);
            return acc;
          }

          return [...acc, { ...product }];
        }, [])
        .sort((a, b) => b.quantity - a.quantity);

      return {
        data: uniqueProducts,
        message: 'Sold products report retrieved successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error occurred while retrieving sold products report',
      };
    }
  };
}
