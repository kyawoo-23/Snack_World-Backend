/*
  Warnings:

  - Added the required column `UpdatedAt` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `VendorPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `VendorUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Admin` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Announcement` ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    MODIFY `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `CustomerOrder` ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    MODIFY `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Delivery` ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    MODIFY `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ProductImage` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `PurchaseProduct` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Variant` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    MODIFY `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `VendorPurchase` ADD COLUMN `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `VendorUser` ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    MODIFY `CreateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
