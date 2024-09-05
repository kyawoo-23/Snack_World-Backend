import { Injectable } from '@nestjs/common';
import { CreateCustomerOrderDto } from './dto/create-customer-order.dto';
import { DatabaseService } from 'src/database/database.service';
import { CustomerOrder, Prisma, Vendor } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';

@Injectable()
export class CustomerOrderService {
  constructor(private _db: DatabaseService) {}

  async create(
    customerId: string,
    createCustomerOrderDto: CreateCustomerOrderDto,
  ): Promise<Response<CustomerOrder>> {
    try {
      const { products, ...data } = createCustomerOrderDto;

      if (!products || !Array.isArray(products)) {
        throw new Error('Missing or invalid product data');
      }

      const orderProducts = await Promise.all(
        products.map(async (product) => {
          const { productId, productVariantId } = product;

          // Find product details
          const foundProduct = await this._db.product.findUnique({
            where: { productId },
            select: {
              productId: true,
              name: true,
              vendor: { select: { vendorId: true, name: true } },
              productVariant: {
                where: { productVariantId },
                select: {
                  productVariantId: true,
                  variant: {
                    select: { name: true },
                  },
                },
              },
            },
          });

          // Check if product and variant exist
          if (!foundProduct) {
            throw new Error('Invalid product or product variant');
          }

          return {
            ...product,
            vendorId: foundProduct.vendor.vendorId,
            vendorName: foundProduct.vendor.name,
            productName: foundProduct.name,
            variantName: product.variantName,
          };
        }),
      );

      // Create CustomerOrder
      const customerOrder = await this._db.customerOrder.create({
        data: {
          ...data, // Your other customer order data
          customer: {
            connect: { customerId },
          },
          customerOrderVendor: {
            create: orderProducts.map((product) => ({
              vendorName: product.vendorName,
              deliveryAddress: data.deliveryAddress,
              customer: {
                connect: { customerId },
              },
              vendor: {
                connect: { vendorId: product.vendorId },
              },
              customerOrderVendorProduct: {
                create: {
                  quantity: product.quantity,
                  price: product.price,
                  productId: product.productId,
                  productVariantId: product.productVariantId,
                  productName: product.productName,
                  variantName: product.variantName,
                  vendorName: product.vendorName,
                },
              },
            })),
          },
        },
      });

      if (customerOrder) {
        await this._db.cartProduct.deleteMany({
          where: {
            customerId,
          },
        });
      }

      return {
        message: 'Customer order created successfully',
        data: customerOrder,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Error creating customer order',
        error: error.message,
      };
    }
  }

  // async create(
  //   createCustomerOrderDto: CreateCustomerOrderDto,
  // ): Promise<Response<CustomerOrder>> {
  //   try {
  //     const { vendors, customerId, ...data } = createCustomerOrderDto;
  //     const res = await this._db.customerOrder.create({
  //       data: {
  //         ...data,
  //         customer: {
  //           connect: { customerId },
  //         },
  //         customerOrderVendor: {
  //           create: vendors.map(({ vendorId, products, ...vendor }) => ({
  //             ...vendor,
  //             vendor: {
  //               connect: { vendorId },
  //             },
  //             customer: {
  //               connect: { customerId },
  //             },
  //             customerOrderVendorProduct: {
  //               create: products.map(
  //                 ({ productId, productVariantId, ...product }) => ({
  //                   ...product,
  //                   vendorName: vendor.vendorName,
  //                   product: {
  //                     connect: { productId: productId },
  //                   },
  //                   productVariant: {
  //                     connect: { productVariantId },
  //                   },
  //                 }),
  //               ),
  //             },
  //           })),
  //         },
  //       },
  //     });

  //     return {
  //       message: 'Customer order created successfully',
  //       data: res,
  //     };
  //   } catch (error) {
  //     return {
  //       isSuccess: false,
  //       message: 'Error creating customer order',
  //       error: error.message,
  //     };
  //   }
  // }

  async findAll(): Promise<Response<CustomerOrder[]>> {
    try {
      const res = await this._db.customerOrder.findMany();

      if (res.length === 0) {
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
