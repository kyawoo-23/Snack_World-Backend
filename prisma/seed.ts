import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

export enum AdminRoleEnum {
  SUPER_ADMIN = 'Super Admin',
  MANAGER = 'Manager',
  ADMINSTRATOR = 'Administrator',
  OPERATION_STAFF = 'Operation Staff',
}

export enum VendorUserRoleEnum {
  VENDOR_ADMINSTRATOR = 'Vendor Administrator',
  VENDOR_OPERATION_STAFF = 'Vendor Operation Staff',
}

const adminRolesData = [
  { name: AdminRoleEnum.SUPER_ADMIN },
  { name: AdminRoleEnum.MANAGER },
  { name: AdminRoleEnum.ADMINSTRATOR },
  { name: AdminRoleEnum.OPERATION_STAFF },
];

const vendorUserRolesData = [
  { name: VendorUserRoleEnum.VENDOR_ADMINSTRATOR },
  { name: VendorUserRoleEnum.VENDOR_OPERATION_STAFF },
];

const variantsData = [
  { name: 'Strawberry', color: '#FF4C4C' },
  { name: 'Vanilla', color: '#F3E5AB' },
  { name: 'Chocolate', color: '#D2691E' },
  { name: 'Banana', color: '#FFE135' },
  { name: 'Blueberry', color: '#5A3E96' },
];

const categoriesData = [
  { name: 'Cake' },
  { name: 'Candy' },
  { name: 'Cereal' },
  { name: 'Cookie' },
  { name: 'Jelly' },
];

async function createAdminRoles() {
  return prisma.adminRole.createMany({ data: adminRolesData });
}

async function createVendorUserRoles() {
  return prisma.vendorUserRole.createMany({ data: vendorUserRolesData });
}

async function createSuperAdmin() {
  const superAdminRole = await prisma.adminRole.findUnique({
    where: { name: AdminRoleEnum.SUPER_ADMIN },
  });

  if (!superAdminRole) throw new Error('Super Admin role not found');

  return prisma.admin.create({
    data: {
      name: AdminRoleEnum.SUPER_ADMIN,
      email: 'admin@gmail.com',
      password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10),
      adminRole: { connect: { adminRoleId: superAdminRole.adminRoleId } },
    },
  });
}

async function createVariants() {
  return prisma.variant.createMany({ data: variantsData });
}

async function createCategories() {
  return prisma.category.createMany({ data: categoriesData });
}

async function createVendor() {
  const res = await prisma.vendor.create({
    data: {
      name: 'Snack Zone',
      email: 'snackzone@gmail.com',
      image:
        'https://utfs.io/f/f1d4267d-5534-4e1a-9b77-1e647a9800d8-vxkpry.png',
    },
  });

  const vendorUserRole = await prisma.vendorUserRole.findUnique({
    where: { name: VendorUserRoleEnum.VENDOR_ADMINSTRATOR },
  });

  return prisma.vendorUser.create({
    data: {
      name: res.name,
      email: res.email,
      password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10),
      vendor: { connect: { vendorId: res.vendorId } },
      vendorUserRole: {
        connect: {
          vendorUserRoleId: vendorUserRole.vendorUserRoleId,
        },
      },
    },
  });
}

async function main() {
  try {
    const adminRoles = await createAdminRoles();
    const vendorUserRoles = await createVendorUserRoles();
    const superAdmin = await createSuperAdmin();
    const variants = await createVariants();
    const categories = await createCategories();
    const vendor = await createVendor();

    console.log({
      adminRoles,
      superAdmin,
      vendorUserRoles,
      variants,
      categories,
      vendor,
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
