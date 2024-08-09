import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Response } from 'src/common/interceptors/response.interceptor';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private _db: DatabaseService) {}

  async create(createProductDto: CreateProductDto): Promise<Response<Product>> {
    try {
      const { vendorId, categoryId, productImages, productVariants, ...rest } =
        createProductDto;
      const res = await this._db.product.create({
        data: {
          ...rest,
          vendor: {
            connect: {
              vendorId,
            },
          },
          category: {
            connect: {
              categoryId,
            },
          },
          productImage: {
            create: productImages?.map((image) => ({
              image,
            })),
          },
          productVariant: {
            create: productVariants?.map((variant) => ({
              variant: {
                connect: {
                  variantId: variant,
                },
              },
            })),
          },
        },
      });

      return {
        message: 'Product created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create product',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Product[]>> {
    try {
      const res = await this._db.product.findMany({
        include: {
          category: true,
          productVariant: true,
          vendor: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      if (res.length === 0) {
        return {
          data: [],
          message: 'No products found',
        };
      }
      return {
        message: 'All products fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch products',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Product>> {
    try {
      const res = await this._db.product.findUnique({
        where: {
          productId: id,
        },
        include: {
          category: true,
          productVariant: true,
          vendor: true,
          productImage: true,
        },
      });

      if (!res) {
        return {
          data: null,
          message: 'Product not found',
        };
      }
      return {
        message: 'Product fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch product',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Response<Product>> {
    try {
      const { categoryId, productVariants, ...productData } = updateProductDto;

      const res = await this._db.product.update({
        where: { productId: id },
        data: {
          ...productData,
          category: categoryId ? { connect: { categoryId } } : undefined,
        },
      });

      if (productVariants) {
        // Disconnect existing variants
        await this._db.productVariant.deleteMany({
          where: {
            productId: id,
          },
        });

        // Connect new variants
        for (const variant of productVariants) {
          await this._db.productVariant.create({
            data: {
              product: { connect: { productId: id } },
              variant: { connect: { variantId: variant } },
            },
          });
        }
      }

      return {
        message: 'Product updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update product',
        error: error.message,
      };
    }
  }

  async toggleStatus(id: string): Promise<Response<Product>> {
    try {
      const product = await this._db.product.findUnique({
        where: {
          productId: id,
        },
      });

      if (!product) {
        return {
          data: null,
          message: 'Product not found',
        };
      }

      const res = await this._db.product.update({
        where: {
          productId: id,
        },
        data: {
          isActive: !product.isActive,
        },
      });

      return {
        message: 'Product status updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update product status',
        error: error.message,
      };
    }
  }

  async updateImage(id: string, imageUrl: string): Promise<Response<Product>> {
    try {
      const product = await this._db.product.findUnique({
        where: {
          productId: id,
        },
      });

      if (!product) {
        return {
          data: null,
          message: 'Product not found',
        };
      }

      const res = await this._db.product.update({
        where: {
          productId: id,
        },
        data: {
          primaryImage: imageUrl,
        },
      });

      return {
        message: 'Product primary image updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update product primary image',
        error: error.message,
      };
    }
  }
}
