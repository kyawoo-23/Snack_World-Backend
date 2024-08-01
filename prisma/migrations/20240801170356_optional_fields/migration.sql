/*
  Warnings:

  - You are about to drop the column `createAt` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `VendorUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Admin` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Announcement` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `CustomerOrder` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Delivery` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `promotion` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `promotionPrice` DOUBLE NULL,
    MODIFY `stock` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `ProductImage` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `PurchaseProduct` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Variant` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Vendor` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `VendorPurchase` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `VendorUser` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
