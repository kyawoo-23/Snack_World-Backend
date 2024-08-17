/*
  Warnings:

  - You are about to drop the column `productVariant` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productVariantProductVariantId` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productVariant` on the `WishListProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productVariantProductVariantId` on the `WishListProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_productVariantProductVariantId_fkey`;

-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_productVariantProductVariantId_fkey`;

-- DropIndex
DROP INDEX `CartProduct_productVariantId_fkey` ON `CartProduct`;

-- DropIndex
DROP INDEX `WishListProduct_productVariantId_fkey` ON `WishListProduct`;

-- AlterTable
ALTER TABLE `CartProduct` DROP COLUMN `productVariant`,
    DROP COLUMN `productVariantProductVariantId`;

-- AlterTable
ALTER TABLE `WishListProduct` DROP COLUMN `productVariant`,
    DROP COLUMN `productVariantProductVariantId`;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;
