/*
  Warnings:

  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `stock`;

-- AlterTable
ALTER TABLE `ProductVariant` ADD COLUMN `stock` INTEGER NOT NULL DEFAULT 0;
