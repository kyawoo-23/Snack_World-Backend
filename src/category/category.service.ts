import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { Response } from 'src/common/interceptors/response.interceptor';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoryService {
  constructor(private readonly _db: DatabaseService) {}

  async create(
    createCategoryDto: Prisma.CategoryCreateInput,
  ): Promise<Response<Category>> {
    try {
      const res = await this._db.category.create({
        data: createCategoryDto,
      });
      return {
        message: 'Category created successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to create category',
        error: error.message,
      };
    }
  }

  async findAll(): Promise<Response<Category[]>> {
    try {
      const res = await this._db.category.findMany();
      if (!res) {
        return {
          message: 'No categories found',
          data: [],
        };
      }
      return {
        message: 'Categories fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch categories',
        error: error.message,
      };
    }
  }

  async findOne(id: string): Promise<Response<Category>> {
    try {
      const res = await this._db.category.findUnique({
        where: {
          categoryId: id,
        },
      });

      if (!res) {
        return {
          message: 'Category not found',
          data: null,
        };
      }

      return {
        message: 'Category fetched successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to fetch category',
        error: error.message,
      };
    }
  }

  async update(
    id: string,
    updateCategoryDto: Prisma.CategoryUpdateInput,
  ): Promise<Response<Category>> {
    try {
      const res = await this._db.category.update({
        where: {
          categoryId: id,
        },
        data: updateCategoryDto,
      });

      return {
        message: 'Category updated successfully',
        data: res,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: 'Failed to update category',
        error: error.message,
      };
    }
  }
}
