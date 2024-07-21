import { Prisma } from '@prisma/client';

interface Create {
  vendorUserId: string;
  purchaseProducts: {
    purchasePrice: number;
    quantity: number;
    productVariantId: string;
    productId: string;
  }[];
}

export type CreateVendorPurchaseDto = Prisma.VendorPurchaseCreateInput & Create;
