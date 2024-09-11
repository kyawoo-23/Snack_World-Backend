-- DropForeignKey
ALTER TABLE `DeliveryOrder` DROP FOREIGN KEY `DeliveryOrder_deliveryId_fkey`;

-- AlterTable
ALTER TABLE `DeliveryOrder` MODIFY `deliveryId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `DeliveryOrder` ADD CONSTRAINT `DeliveryOrder_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`deliveryId`) ON DELETE SET NULL ON UPDATE CASCADE;
