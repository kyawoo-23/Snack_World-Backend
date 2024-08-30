import { Prisma } from '@prisma/client';

interface create {
  vendorId?: string[];
  customerId?: string[];
}

export type CreateAnnouncementDto = Prisma.AnnouncementCreateInput & create;
