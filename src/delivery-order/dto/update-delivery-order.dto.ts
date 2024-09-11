import { Prisma } from '@prisma/client';

interface update {
  deliveryOrderId: string;
}

export type UpdateDeliveryOrderStatusDto = update;
