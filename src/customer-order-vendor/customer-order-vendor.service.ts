import { Injectable } from '@nestjs/common';
import { CustomerOrderVendor, Prisma } from '@prisma/client';
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
  }
}
