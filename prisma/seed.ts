import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

enum AdminRoleEnum {
  SUPER_ADMIN = 'Super Admin',
  MANAGER = 'Manager',
  ADMINSTRATOR = 'Administrator',
  OPERATION_STAFF = 'Operation Staff',
}

enum VendorUserRoleEnum {
  VENDOR_ADMINSTRATOR = 'Vendor Administrator',
  VENDOR_OPERATION_STAFF = 'Vendor Operation Staff',
}

async function main() {
  const adminRoles = await prisma.adminRole.createMany({
    data: [
      {
        name: AdminRoleEnum.SUPER_ADMIN,
      },
      {
        name: AdminRoleEnum.MANAGER,
      },
      {
        name: AdminRoleEnum.ADMINSTRATOR,
      },
      {
        name: AdminRoleEnum.OPERATION_STAFF,
      },
    ],
  });

  const vendorUserRoles = await prisma.vendorUserRole.createMany({
    data: [
      {
        name: VendorUserRoleEnum.VENDOR_ADMINSTRATOR,
      },
      {
        name: VendorUserRoleEnum.VENDOR_OPERATION_STAFF,
      },
    ],
  });

  const superAdminRole = await prisma.adminRole.findUnique({
    where: { name: AdminRoleEnum.SUPER_ADMIN },
  });

  const superAdmin = await prisma.admin.create({
    data: {
      name: AdminRoleEnum.SUPER_ADMIN,
      email: 'admin@gmail.com',
      password: process.env.DEFAULT_PASSWORD,
      adminRole: {
        connect: {
          adminRoleId: superAdminRole?.adminRoleId,
        },
      },
    },
  });

  console.log({ adminRoles, superAdmin, vendorUserRoles });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
