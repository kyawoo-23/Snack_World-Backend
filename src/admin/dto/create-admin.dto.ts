import { Prisma } from '@prisma/client';

interface create {
  adminRoleId: string;
}

export type CreateAdminDto = Prisma.AdminCreateInput & create;
