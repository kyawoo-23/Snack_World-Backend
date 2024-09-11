-- AlterTable
ALTER TABLE `CustomerOrderVendor` MODIFY `customerOrderVendorStatus` VARCHAR(191) NOT NULL DEFAULT 'NEW';

-- AlterTable
ALTER TABLE `DeliveryOrder` MODIFY `deliveryOrderStatus` VARCHAR(191) NOT NULL DEFAULT 'NEW';
