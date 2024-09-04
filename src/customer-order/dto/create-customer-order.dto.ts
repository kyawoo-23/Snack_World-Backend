import { Prisma, Product } from '@prisma/client';

// interface create {
//   customerId: string;
//   orderCode: string;
//   totalPrice: number;
//   deliveryPrice: number;
//   deliveryAddress: string;
//   deliveryContact: string;
//   isPrepaid: boolean;
//   vendors: {
//     vendorId: string;
//     vendorName: string;
//     deliveryAddress: string;
//     products: {
//       productId: string;
//       productVariantId: string;
//       productName: string;
//       variantName: string;
//       quantity: number;
//       price: number;
//     }[];
//   }[];
// }

interface create {
  products: {
    productId: string;
    quantity: number;
    productVariantId: string;
    variantName: string;
    price: number;
  }[];
}

export type CreateCustomerOrderDto = Prisma.CustomerOrderCreateInput & create;
