/*
  Warnings:

  - Added the required column `productVariant` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariant` to the `WishListProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_productVariantId_fkey`;

-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_productVariantId_fkey`;

-- DropIndex
DROP INDEX `PurchaseProduct_productVariantId_fkey` ON `PurchaseProduct`;

-- AlterTable
ALTER TABLE `CartProduct` ADD COLUMN `productVariant` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantProductVariantId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `WishListProduct` ADD COLUMN `productVariant` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantProductVariantId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_productVariantProductVariantId_fkey` FOREIGN KEY (`productVariantProductVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productVariantProductVariantId_fkey` FOREIGN KEY (`productVariantProductVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE SET NULL ON UPDATE CASCADE;
