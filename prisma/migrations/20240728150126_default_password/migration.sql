-- AlterTable
ALTER TABLE `Admin` MODIFY `password` VARCHAR(191) NOT NULL DEFAULT 'P@ssword1!!';

-- AlterTable
ALTER TABLE `Customer` MODIFY `password` VARCHAR(191) NOT NULL DEFAULT 'P@ssword1!!';

-- AlterTable
ALTER TABLE `VendorUser` MODIFY `password` VARCHAR(191) NOT NULL DEFAULT 'P@ssword1!!';
