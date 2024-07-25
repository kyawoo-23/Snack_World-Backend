import { Prisma } from '@prisma/client';

interface create {
  customerId: string;
  quantity: number;
  productId: string;
  productVarinatId: string;
}
export type CreateCartProductDto = Prisma.CartProductCreateInput & create;
