/*
  Warnings:

  - Added the required column `productVariant` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `PurchaseProduct` DROP FOREIGN KEY `PurchaseProduct_productVariantId_fkey`;

-- AlterTable
ALTER TABLE `PurchaseProduct` ADD COLUMN `productVariant` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantProductVariantId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_productVariantProductVariantId_fkey` FOREIGN KEY (`productVariantProductVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE SET NULL ON UPDATE CASCADE;
