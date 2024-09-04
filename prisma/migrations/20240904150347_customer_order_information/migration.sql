/*
  Warnings:

  - You are about to drop the column `deliveryMethod` on the `CustomerOrder` table. All the data in the column will be lost.
  - Added the required column `deliveryContact` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CustomerOrder` DROP COLUMN `deliveryMethod`,
    ADD COLUMN `deliveryContact` VARCHAR(191) NOT NULL,
    ADD COLUMN `isPrepaid` BOOLEAN NOT NULL DEFAULT false;
