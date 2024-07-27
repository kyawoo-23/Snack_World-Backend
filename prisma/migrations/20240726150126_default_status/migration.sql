-- AlterTable
ALTER TABLE `Admin` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Product` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Vendor` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `VendorUser` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT true;
