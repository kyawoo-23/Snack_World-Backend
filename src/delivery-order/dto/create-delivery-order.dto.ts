import { Prisma } from '@prisma/client';

interface create {
  customerOrderId: string;
  customerOrderVendorId: string;
}

export type CreateDeliveryOrderDto = create & Prisma.DeliveryOrderCreateInput;
