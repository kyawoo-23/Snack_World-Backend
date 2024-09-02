import { Injectable } from '@nestjs/common';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';
import { WishListProduct } from '@prisma/client';

@Injectable()
export class WishlistProductService {
  constructor(private _db: DatabaseService) {}

  async create(
    createWishlistProductDto: CreateWishlistProductDto,
  ): Promise<Response<WishListProduct>> {
    try {
      const { customerId, productId } = createWishlistProductDto;
      const res = await this._db.wishListProduct.create({
        data: {
          product: {
            connect: {
              productId,
            },
          },
          customer: {
            connect: {
              customerId,
            },
          },
        },
      });
      return {
        message: 'Wishlist product created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create wishlist product',
        error: error.message,
      };
    }
  }

  async findAll(id: string): Promise<Response<WishListProduct[]>> {
    try {
      const res = await this._db.wishListProduct.findMany({
        where: {
          customerId: id,
        },
        include: {
          product: {
            include: {
              category: true,
              vendor: true,
            },
          },
        },
      });

      if (res.length === 0) {
        return {
          data: [],
          message: 'Wishlist products not found',
        };
      }
      return {
        message: 'Wishlist products fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch wishlist products',
        error: error.message,
      };
    }
  }

  async remove(id: string): Promise<Response<WishListProduct>> {
    try {
      const res = await this._db.wishListProduct.delete({
        where: {
          wishListProductId: id,
        },
      });
      return {
        message: 'Wishlist product deleted successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to delete wishlist product',
        error: error.message,
      };
    }
  }
}
