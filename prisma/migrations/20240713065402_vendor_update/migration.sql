/*
  Warnings:

  - Added the required column `vendorId` to the `VendorUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VendorUser` ADD COLUMN `vendorId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `VendorUser` ADD CONSTRAINT `VendorUser_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`vendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;
