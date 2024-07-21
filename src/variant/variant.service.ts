import { Injectable } from '@nestjs/common';
import { Prisma, Variant } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VariantService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createVariantDto: Prisma.VariantCreateInput,
  ): Promise<Response<Variant>> {
    try {
      const res = await this._db.variant.create({
        data: createVariantDto,
      });
      return {
        message: 'Variant created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create variant',
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const res = await this._db.variant.findMany();
      if (!res) {
        return {
          data: [],
          message: 'Variants not found',
        };
      }

      return {
        message: 'Variants fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch variants',
        error: error.message,
      };
    }
  }

  async update(id: string, updateVariantDto: Prisma.VariantUpdateInput) {
    try {
      const res = await this._db.variant.update({
        where: {
          variantId: id,
        },
        data: updateVariantDto,
      });
      if (!res) {
        return {
          isSuccess: false,
          message: 'Variant not found',
        };
      }

      return {
        message: 'Variant updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update variant',
        error: error.message,
      };
    }
  }
}
