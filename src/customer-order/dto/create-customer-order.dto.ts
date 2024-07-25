import { Prisma } from '@prisma/client';

interface create {
  customerId: string;
  orderCode: string;
  totalPrice: number;
  deliveryPrice: number;
  deliveryAddress: string;
  deliveryMethod: string;
  vendors: {
    vendorId: string;
    vendorName: string;
    deliveryAddress: string;
    products: {
      productId: string;
      productVariantId: string;
      productName: string;
      variantName: string;
      quantity: number;
      price: number;
    }[];
  }[];
}

export type CreateCustomerOrderDto = Prisma.CustomerOrderCreateInput & create;
