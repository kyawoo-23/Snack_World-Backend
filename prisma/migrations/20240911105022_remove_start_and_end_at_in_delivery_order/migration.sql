/*
  Warnings:

  - You are about to drop the column `endAt` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `DeliveryOrder` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DeliveryOrder` DROP COLUMN `endAt`,
    DROP COLUMN `startAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
