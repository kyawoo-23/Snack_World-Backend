import { Prisma } from '@prisma/client';

interface create {
  customerId: string;
}

export type CreateWishlistProductDto = Prisma.WishListProductCreateInput &
  create;
