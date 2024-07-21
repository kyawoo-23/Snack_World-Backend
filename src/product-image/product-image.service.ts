import { Injectable } from '@nestjs/common';
import { Prisma, ProductImage } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductImageService {
  constructor(private _db: DatabaseService) {}

  async update(
    id: string,
    updateProductImageDto: Prisma.ProductImageUpdateInput,
  ): Promise<Response<ProductImage>> {
    try {
      const res = await this._db.productImage.update({
        where: {
          productImageId: id,
        },
        data: updateProductImageDto,
      });

      return {
        message: 'Product image updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update product image',
      };
    }
  }

  async remove(id: string): Promise<Response<ProductImage>> {
    try {
      const res = await this._db.productImage.delete({
        where: {
          productImageId: id,
        },
      });

      return {
        message: 'Product image deleted successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to delete product image',
      };
    }
  }
}