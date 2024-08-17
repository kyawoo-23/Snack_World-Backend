/*
  Warnings:

  - You are about to drop the column `productVariant` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productVariantProductVariantId` on the `PurchaseProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `PurchaseProduct` DROP FOREIGN KEY `PurchaseProduct_productVariantProductVariantId_fkey`;

-- AlterTable
ALTER TABLE `PurchaseProduct` DROP COLUMN `productVariant`,
    DROP COLUMN `productVariantProductVariantId`;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;
