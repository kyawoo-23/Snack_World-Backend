-- CreateTable
CREATE TABLE `VendorRemark` (
    `vendorRemarkId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `vendorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`vendorRemarkId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VendorRemark` ADD CONSTRAINT `VendorRemark_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`vendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;
