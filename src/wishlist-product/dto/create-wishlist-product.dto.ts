import { Prisma } from '@prisma/client';

interface create {
  customerId: string;
  productId: string;
}

export type CreateWishlistProductDto = create;
