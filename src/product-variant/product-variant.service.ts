import { Injectable, UseGuards } from '@nestjs/common';
import { Prisma, ProductVariant } from '@prisma/client';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductVariantService {
  constructor(private _db: DatabaseService) {}

  @UseGuards(JwtAuthGuard)
  async update(
    id: string,
    updateProductVariantDto: Prisma.ProductVariantUpdateInput,
  ): Promise<Response<ProductVariant>> {
    try {
      const res = await this._db.productVariant.update({
        where: {
          productVariantId: id,
        },
        data: updateProductVariantDto,
      });

      return {
        message: 'Product variant updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update product variant',
      };
    }
  }
}
