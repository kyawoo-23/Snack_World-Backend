import { Prisma } from '@prisma/client';

export class CreateAnnouncementDto implements Prisma.AnnouncementCreateInput {
  title: string;
  content: string;
  image: string;
  type: string;
  vendorId?: string;
  customerId?: string;
}
