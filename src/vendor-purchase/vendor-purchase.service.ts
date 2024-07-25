import { Injectable } from '@nestjs/common';
import { CreateVendorPurchaseDto } from './dto/create-vendor-purchase.dto';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';
import { PurchaseProduct, VendorPurchase } from '@prisma/client';

@Injectable()
export class VendorPurchaseService {
  constructor(private _db: DatabaseService) {}

  async create(
    createVendorPurchaseDto: CreateVendorPurchaseDto,
  ): Promise<Response<VendorPurchase>> {
    try {
      const { purchaseProducts, vendorUserId, ...rest } =
        createVendorPurchaseDto;

      const res = await this._db.vendorPurchase.create({
        data: {
          ...rest,
          vendorUser: {
            connect: { vendorUserId: vendorUserId },
          },
          purchaseProduct: {
            create: purchaseProducts.map((purchaseProduct) => ({
              ...purchaseProduct,
              productVariant: {
                connect: { id: purchaseProduct.productVariantId },
              },
              product: {
                connect: { id: purchaseProduct.productId },
              },
            })),
          },
        },
      });

      return {
        message: 'Vendor purchase created successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error creating vendor purchase',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<VendorPurchase[]>> {
    try {
      const res = await this._db.vendorPurchase.findMany({
        include: {
          purchaseProduct: {
            include: {
              product: true,
              productVariant: true,
            },
          },
          vendorUser: true,
        },
      });

      if (res.length === 0) {
        return {
          data: [],
          message: 'Vendor purchases not found',
        };
      }

      return {
        message: 'Vendor purchases fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error fetching vendor purchases',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<VendorPurchase>> {
    try {
      const res = await this._db.vendorPurchase.findUnique({
        where: {
          vendorPurchaseId: id,
        },
        include: {
          purchaseProduct: {
            include: {
              product: true,
              productVariant: true,
            },
          },
          vendorUser: true,
        },
      });

      if (!res) {
        return {
          message: 'Vendor purchase not found',
        };
      }

      return {
        message: 'Vendor purchase fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        message: 'Error fetching vendor purchase',
        error: error.message,
      };
    }
  }
}
