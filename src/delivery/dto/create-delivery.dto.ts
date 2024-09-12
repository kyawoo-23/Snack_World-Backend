import { Prisma } from '@prisma/client';

interface create {
  deliveryOrderIds: string[];
}

export type CreateDeliveryDto = Prisma.DeliveryCreateInput & create;
