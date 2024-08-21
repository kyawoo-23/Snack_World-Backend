import { Prisma } from '@prisma/client';

interface update {
  adminRoleId: string;
}

export type UpdateAdminDto = Prisma.AdminUpdateInput & update;
