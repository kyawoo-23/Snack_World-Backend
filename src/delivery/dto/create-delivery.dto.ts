import { Prisma } from '@prisma/client';

interface create {
  deliveryOrderIds: string[];
  adminId: string;
}

export type CreateDeliveryDto = Prisma.DeliveryCreateInput & create;
