/*
  Warnings:

  - You are about to drop the column `productVariantId` on the `WishListProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_productVariantId_fkey`;

-- AlterTable
ALTER TABLE `WishListProduct` DROP COLUMN `productVariantId`;
