-- CreateTable
CREATE TABLE `AnnouncementVendor` (
    `AnnouncementVendorId` VARCHAR(191) NOT NULL,
    `VendorId` VARCHAR(191) NOT NULL,
    `AnnouncementId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`AnnouncementVendorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnnouncementCustomer` (
    `AnnouncementCustomerId` VARCHAR(191) NOT NULL,
    `CustomerId` VARCHAR(191) NOT NULL,
    `AnnouncementId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`AnnouncementCustomerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Announcement` (
    `AnnouncementId` VARCHAR(191) NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Content` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `CreateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`AnnouncementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdminRole` (
    `AdminRoleId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`AdminRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `AdminId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `AdminRoleId` VARCHAR(191) NOT NULL,
    `IsActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`AdminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Variant` (
    `VariantId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`VariantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariant` (
    `ProductVariantId` VARCHAR(191) NOT NULL,
    `VariantId` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProductVariantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivery` (
    `DeliveryId` VARCHAR(191) NOT NULL,
    `DeliveryCode` VARCHAR(191) NOT NULL,
    `DeliveryStatus` VARCHAR(191) NOT NULL,
    `DeliveryName` VARCHAR(191) NOT NULL,
    `CreateAt` DATETIME(3) NOT NULL,
    `CompleteAt` DATETIME(3) NOT NULL,
    `AdminId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`DeliveryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `CategoryId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductImage` (
    `ProductImageId` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProductImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VendorUser` (
    `VendorUserId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `VendorUserRoleId` VARCHAR(191) NOT NULL,
    `IsActive` BOOLEAN NOT NULL,
    `CreateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`VendorUserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendor` (
    `VendorId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `IsActive` BOOLEAN NOT NULL,
    `CreateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`VendorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `CustomerId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CustomerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseProduct` (
    `PurchaseProductId` VARCHAR(191) NOT NULL,
    `PurchasePrice` DOUBLE NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `ProductVariantId` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,
    `VendorPurchaseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`PurchaseProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VendorUserRole` (
    `VendorUserRoleId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`VendorUserRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WishListProduct` (
    `WishListProductId` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,
    `ProductVariantId` VARCHAR(191) NOT NULL,
    `CustomerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`WishListProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VendorPurchase` (
    `VendorPurchaseId` VARCHAR(191) NOT NULL,
    `PurchaseCode` VARCHAR(191) NOT NULL,
    `PurchaseAt` DATETIME(3) NOT NULL,
    `VendorUserId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`VendorPurchaseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CartProduct` (
    `CartProductId` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,
    `ProductVariantId` VARCHAR(191) NOT NULL,
    `CustomerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CartProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerOrder` (
    `CustomerOrderId` VARCHAR(191) NOT NULL,
    `OrderCode` VARCHAR(191) NOT NULL,
    `OrderStatus` VARCHAR(191) NOT NULL,
    `TotalPrice` DOUBLE NOT NULL,
    `DeliveryPrice` DOUBLE NOT NULL,
    `DeliveryAddress` VARCHAR(191) NOT NULL,
    `DeliveryMethod` VARCHAR(191) NOT NULL,
    `CustomerId` VARCHAR(191) NOT NULL,
    `CreateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`CustomerOrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryOrder` (
    `DeliveryOrderId` VARCHAR(191) NOT NULL,
    `DeliveryOrderStatus` VARCHAR(191) NOT NULL,
    `DeliveryName` VARCHAR(191) NOT NULL,
    `StartAt` DATETIME(3) NOT NULL,
    `EndAt` DATETIME(3) NOT NULL,
    `DeliveryId` VARCHAR(191) NOT NULL,
    `CustomerOrderVendorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`DeliveryOrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerOrderVendor` (
    `CustomerOrderVendorId` VARCHAR(191) NOT NULL,
    `VendorName` VARCHAR(191) NOT NULL,
    `VendorId` VARCHAR(191) NOT NULL,
    `CustomerOrderVendorStatus` VARCHAR(191) NOT NULL,
    `DeliveryAddress` VARCHAR(191) NOT NULL,
    `CustomerOrderId` VARCHAR(191) NOT NULL,
    `CustomerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CustomerOrderVendorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerOrderVendorProduct` (
    `CustomerOrderVendorProductId` VARCHAR(191) NOT NULL,
    `ProductName` VARCHAR(191) NOT NULL,
    `VariantName` VARCHAR(191) NOT NULL,
    `VendorName` VARCHAR(191) NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `Price` DOUBLE NOT NULL,
    `OrderVendorProductStatus` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,
    `ProductVariantId` VARCHAR(191) NOT NULL,
    `CustomerOrderVendorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`CustomerOrderVendorProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `ProductId` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `PrimaryImage` VARCHAR(191) NOT NULL,
    `Weight` DOUBLE NOT NULL,
    `Price` DOUBLE NOT NULL,
    `Promotion` BOOLEAN NOT NULL,
    `PromotionPrice` DOUBLE NOT NULL,
    `Stock` INTEGER NOT NULL,
    `IsActive` BOOLEAN NOT NULL,
    `VendorId` VARCHAR(191) NOT NULL,
    `CategoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnnouncementVendor` ADD CONSTRAINT `AnnouncementVendor_VendorId_fkey` FOREIGN KEY (`VendorId`) REFERENCES `Vendor`(`VendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementVendor` ADD CONSTRAINT `AnnouncementVendor_AnnouncementId_fkey` FOREIGN KEY (`AnnouncementId`) REFERENCES `Announcement`(`AnnouncementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementCustomer` ADD CONSTRAINT `AnnouncementCustomer_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementCustomer` ADD CONSTRAINT `AnnouncementCustomer_AnnouncementId_fkey` FOREIGN KEY (`AnnouncementId`) REFERENCES `Announcement`(`AnnouncementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_AdminRoleId_fkey` FOREIGN KEY (`AdminRoleId`) REFERENCES `AdminRole`(`AdminRoleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_VariantId_fkey` FOREIGN KEY (`VariantId`) REFERENCES `Variant`(`VariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_AdminId_fkey` FOREIGN KEY (`AdminId`) REFERENCES `Admin`(`AdminId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendorUser` ADD CONSTRAINT `VendorUser_VendorUserRoleId_fkey` FOREIGN KEY (`VendorUserRoleId`) REFERENCES `VendorUserRole`(`VendorUserRoleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_ProductVariantId_fkey` FOREIGN KEY (`ProductVariantId`) REFERENCES `ProductVariant`(`ProductVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_VendorPurchaseId_fkey` FOREIGN KEY (`VendorPurchaseId`) REFERENCES `VendorPurchase`(`VendorPurchaseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_ProductVariantId_fkey` FOREIGN KEY (`ProductVariantId`) REFERENCES `ProductVariant`(`ProductVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendorPurchase` ADD CONSTRAINT `VendorPurchase_VendorUserId_fkey` FOREIGN KEY (`VendorUserId`) REFERENCES `VendorUser`(`VendorUserId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_ProductVariantId_fkey` FOREIGN KEY (`ProductVariantId`) REFERENCES `ProductVariant`(`ProductVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrder` ADD CONSTRAINT `CustomerOrder_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryOrder` ADD CONSTRAINT `DeliveryOrder_DeliveryId_fkey` FOREIGN KEY (`DeliveryId`) REFERENCES `Delivery`(`DeliveryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryOrder` ADD CONSTRAINT `DeliveryOrder_CustomerOrderVendorId_fkey` FOREIGN KEY (`CustomerOrderVendorId`) REFERENCES `CustomerOrderVendor`(`CustomerOrderVendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_VendorId_fkey` FOREIGN KEY (`VendorId`) REFERENCES `Vendor`(`VendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_CustomerOrderId_fkey` FOREIGN KEY (`CustomerOrderId`) REFERENCES `CustomerOrder`(`CustomerOrderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_ProductVariantId_fkey` FOREIGN KEY (`ProductVariantId`) REFERENCES `ProductVariant`(`ProductVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_CustomerOrderVendorId_fkey` FOREIGN KEY (`CustomerOrderVendorId`) REFERENCES `CustomerOrderVendor`(`CustomerOrderVendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_VendorId_fkey` FOREIGN KEY (`VendorId`) REFERENCES `Vendor`(`VendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `Category`(`CategoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
