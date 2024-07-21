import { Prisma } from '@prisma/client';

interface create {
  productImages: string[];
  productVariants?: string[];
}

export type CreateProductDto = create & Prisma.ProductCreateInput;
