import { Injectable } from '@nestjs/common';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';
import { CartProduct, Prisma } from '@prisma/client';

@Injectable()
export class CartProductService {
  constructor(private _db: DatabaseService) {}

  async create(
    createCartProductDto: CreateCartProductDto,
  ): Promise<Response<CartProduct>> {
    try {
      const { customerId, productId, productVarinatId, ...data } =
        createCartProductDto;
      const res = await this._db.cartProduct.create({
        data: {
          ...data,
          customer: {
            connect: {
              customerId,
            },
          },
          product: {
            connect: {
              productId,
            },
          },
          productVariant: {
            connect: {
              productVariantId: productVarinatId,
            },
          },
        },
      });

      return {
        message: 'Cart product created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create cart product',
        error: error.message,
      };
    }
  }

  async findAll(id: string): Promise<Response<CartProduct[]>> {
    try {
      const res = await this._db.cartProduct.findMany({
        where: {
          customerId: id,
        },
        include: {
          product: true,
          productVariant: true,
        },
      });

      if (res.length === 0) {
        return {
          data: [],
          message: 'Cart products not found',
        };
      }
      return {
        message: 'Cart products fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch cart products',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateCartProductDto: Prisma.CartProductUpdateInput,
  ): Promise<Response<CartProduct>> {
    try {
      const res = await this._db.cartProduct.update({
        where: {
          cartProductId: id,
        },
        data: updateCartProductDto,
      });

      return {
        message: 'Cart product updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update cart product',
        error: error.message,
      };
    }
  }

  async remove(id: string): Promise<Response<CartProduct>> {
    try {
      const res = await this._db.cartProduct.delete({
        where: {
          cartProductId: id,
        },
      });

      return {
        message: 'Cart product deleted successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to delete cart product',
        error: error.message,
      };
    }
  }

  async removeAll(id: string): Promise<Response<CartProduct[]>> {
    try {
      const res = await this._db.cartProduct.deleteMany({
        where: {
          customerId: id,
        },
      });

      return {
        message: 'Cart products deleted successfully',
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to delete cart products',
        error: error.message,
      };
    }
  }
}