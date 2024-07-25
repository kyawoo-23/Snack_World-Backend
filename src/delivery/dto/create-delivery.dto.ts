import { Prisma } from '@prisma/client';

interface create {
  adminId: string;
  deliverOrder: {
    deliveryName: string;
    startAt: string;
    endAt: string;
    customerOrderVendorId: string;
  }[];
}

export type CreateDeliveryDto = Prisma.DeliveryCreateInput & create;
