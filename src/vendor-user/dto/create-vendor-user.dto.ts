import { Prisma } from '@prisma/client';

interface Create {
  vendorId: string;
}

export type CreateVendorUserDto = Prisma.VendorUserCreateInput & Create;
