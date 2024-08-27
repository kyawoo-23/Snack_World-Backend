import { Prisma } from '@prisma/client';

interface create {
  vendorId: string;
  categoryId: string;
  productImages: string[];
  productVariants?: string[];
}

export type CreateProductDto = create & Prisma.ProductCreateInput;

interface update {
  categoryId?: string;
  productVariants?: string[];
}

export type UpdateProductDto = update & Prisma.ProductUpdateInput;

export type PaginationDto = {
  page: number;
  limit: number;
};
