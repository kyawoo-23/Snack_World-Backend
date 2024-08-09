import { Prisma } from '@prisma/client';

interface update {
  vendorUserRoleId: string;
}

export type UpdateVendorUserDto = Prisma.VendorUserUpdateInput & update;
