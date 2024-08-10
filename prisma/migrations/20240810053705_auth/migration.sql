/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `VendorUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Admin` ALTER COLUMN `password` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Customer` ALTER COLUMN `password` DROP DEFAULT;

-- AlterTable
ALTER TABLE `VendorUser` ALTER COLUMN `password` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Admin_email_key` ON `Admin`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_email_key` ON `Customer`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `VendorUser_email_key` ON `VendorUser`(`email`);
