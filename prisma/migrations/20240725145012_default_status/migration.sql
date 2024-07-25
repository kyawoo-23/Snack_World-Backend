/*
  Warnings:

  - You are about to drop the column `password` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `CustomerOrder` MODIFY `orderStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `CustomerOrderVendor` MODIFY `customerOrderVendorStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `CustomerOrderVendorProduct` MODIFY `orderVendorProductStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `Delivery` MODIFY `deliveryStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `DeliveryOrder` MODIFY `deliveryOrderStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `Vendor` DROP COLUMN `password`;
