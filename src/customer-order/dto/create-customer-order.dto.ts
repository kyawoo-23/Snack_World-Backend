import { Prisma } from '@prisma/client';

interface create {
  customerId: string;
  orderCode: string;
  orderStatus: string;
  totalPrice: number;
  deliveryPrice: number;
  deliveryAddress: string;
  deliveryMethod: string;
  vendors: {
    vendorId: string;
    vendorName: string;
    customerOrderVendorStatus: string;
    deliveryAddress: string;
    products: {
      productId: string;
      productVariantId: string;
      productName: string;
      variantName: string;
      quantity: number;
      price: number;
      orderVendorProductStatus: string;
    }[];
  }[];
}

export type CreateCustomerOrderDto = Prisma.CustomerOrderCreateInput & create;
