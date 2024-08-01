import { Prisma } from '@prisma/client';

interface create {
  vendorId: string;
  categoryId: string;
  productImages: string[];
  productVariants?: string[];
}

export type CreateProductDto = create & Prisma.ProductCreateInput;
