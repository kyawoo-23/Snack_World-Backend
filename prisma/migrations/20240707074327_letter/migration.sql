/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AdminId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `AdminRoleId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `IsActive` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Admin` table. All the data in the column will be lost.
  - The primary key for the `AdminRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AdminRoleId` on the `AdminRole` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `AdminRole` table. All the data in the column will be lost.
  - The primary key for the `Announcement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AnnouncementId` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `Content` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Announcement` table. All the data in the column will be lost.
  - The primary key for the `AnnouncementCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AnnouncementCustomerId` on the `AnnouncementCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `AnnouncementId` on the `AnnouncementCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `AnnouncementCustomer` table. All the data in the column will be lost.
  - The primary key for the `AnnouncementVendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AnnouncementId` on the `AnnouncementVendor` table. All the data in the column will be lost.
  - You are about to drop the column `AnnouncementVendorId` on the `AnnouncementVendor` table. All the data in the column will be lost.
  - You are about to drop the column `VendorId` on the `AnnouncementVendor` table. All the data in the column will be lost.
  - The primary key for the `CartProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CartProductId` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductVariantId` on the `CartProduct` table. All the data in the column will be lost.
  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CategoryId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Customer` table. All the data in the column will be lost.
  - The primary key for the `CustomerOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerOrderId` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryAddress` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryMethod` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryPrice` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `OrderCode` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `OrderStatus` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `TotalPrice` on the `CustomerOrder` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `CustomerOrder` table. All the data in the column will be lost.
  - The primary key for the `CustomerOrderVendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerId` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerOrderId` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerOrderVendorId` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerOrderVendorStatus` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryAddress` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `VendorId` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - You are about to drop the column `VendorName` on the `CustomerOrderVendor` table. All the data in the column will be lost.
  - The primary key for the `CustomerOrderVendorProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerOrderVendorId` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerOrderVendorProductId` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `OrderVendorProductStatus` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductName` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductVariantId` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `VariantName` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - You are about to drop the column `VendorName` on the `CustomerOrderVendorProduct` table. All the data in the column will be lost.
  - The primary key for the `Delivery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AdminId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `CompleteAt` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryCode` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryName` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryStatus` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Delivery` table. All the data in the column will be lost.
  - The primary key for the `DeliveryOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerOrderVendorId` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryId` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryName` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryOrderId` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `DeliveryOrderStatus` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `EndAt` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `StartAt` on the `DeliveryOrder` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CategoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `IsActive` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `PrimaryImage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Promotion` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `PromotionPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `VendorId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Weight` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `ProductImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `ProductImageId` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `ProductImage` table. All the data in the column will be lost.
  - The primary key for the `ProductVariant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ProductId` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `ProductVariantId` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the column `VariantId` on the `ProductVariant` table. All the data in the column will be lost.
  - The primary key for the `PurchaseProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductVariantId` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `PurchasePrice` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `PurchaseProductId` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `PurchaseProduct` table. All the data in the column will be lost.
  - You are about to drop the column `VendorPurchaseId` on the `PurchaseProduct` table. All the data in the column will be lost.
  - The primary key for the `Variant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Color` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `CreateAt` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `VariantId` on the `Variant` table. All the data in the column will be lost.
  - The primary key for the `Vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `IsActive` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `VendorId` on the `Vendor` table. All the data in the column will be lost.
  - The primary key for the `VendorPurchase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `PurchaseAt` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `PurchaseCode` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `VendorPurchaseId` on the `VendorPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `VendorUserId` on the `VendorPurchase` table. All the data in the column will be lost.
  - The primary key for the `VendorUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreateAt` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `IsActive` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `VendorUserId` on the `VendorUser` table. All the data in the column will be lost.
  - You are about to drop the column `VendorUserRoleId` on the `VendorUser` table. All the data in the column will be lost.
  - The primary key for the `VendorUserRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Name` on the `VendorUserRole` table. All the data in the column will be lost.
  - You are about to drop the column `VendorUserRoleId` on the `VendorUserRole` table. All the data in the column will be lost.
  - The primary key for the `WishListProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerId` on the `WishListProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `WishListProduct` table. All the data in the column will be lost.
  - You are about to drop the column `ProductVariantId` on the `WishListProduct` table. All the data in the column will be lost.
  - You are about to drop the column `WishListProductId` on the `WishListProduct` table. All the data in the column will be lost.
  - The required column `adminId` was added to the `Admin` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `adminRoleId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - The required column `adminRoleId` was added to the `AdminRole` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `AdminRole` table without a default value. This is not possible if the table is not empty.
  - The required column `announcementId` was added to the `Announcement` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `content` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - The required column `announcementCustomerId` was added to the `AnnouncementCustomer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `announcementId` to the `AnnouncementCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `AnnouncementCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `announcementId` to the `AnnouncementVendor` table without a default value. This is not possible if the table is not empty.
  - The required column `announcementVendorId` was added to the `AnnouncementVendor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `vendorId` to the `AnnouncementVendor` table without a default value. This is not possible if the table is not empty.
  - The required column `cartProductId` was added to the `CartProduct` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `customerId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - The required column `categoryId` was added to the `Category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - The required column `customerId` was added to the `Customer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - The required column `customerOrderId` was added to the `CustomerOrder` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `deliveryAddress` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryMethod` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryPrice` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderCode` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderStatus` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CustomerOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerOrderId` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - The required column `customerOrderVendorId` was added to the `CustomerOrderVendor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `customerOrderVendorStatus` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryAddress` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorName` to the `CustomerOrderVendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerOrderVendorId` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - The required column `customerOrderVendorProductId` was added to the `CustomerOrderVendorProduct` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `orderVendorProductStatus` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantName` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorName` to the `CustomerOrderVendorProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `completeAt` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryCode` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - The required column `deliveryId` was added to the `Delivery` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `deliveryName` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryStatus` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerOrderVendorId` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryId` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryName` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - The required column `deliveryOrderId` was added to the `DeliveryOrder` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `deliveryOrderStatus` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAt` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryImage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `productId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `promotion` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promotionPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - The required column `productImageId` was added to the `ProductImage` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - The required column `productVariantId` was added to the `ProductVariant` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `variantId` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - The required column `purchaseProductId` was added to the `PurchaseProduct` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `quantity` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorPurchaseId` to the `PurchaseProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - The required column `variantId` was added to the `Variant` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `email` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - The required column `vendorId` was added to the `Vendor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `purchaseAt` to the `VendorPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseCode` to the `VendorPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `VendorPurchase` table without a default value. This is not possible if the table is not empty.
  - The required column `vendorPurchaseId` was added to the `VendorPurchase` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `vendorUserId` to the `VendorPurchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - The required column `vendorUserId` was added to the `VendorUser` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `vendorUserRoleId` to the `VendorUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `VendorUserRole` table without a default value. This is not possible if the table is not empty.
  - The required column `vendorUserRoleId` was added to the `VendorUserRole` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `customerId` to the `WishListProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `WishListProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `WishListProduct` table without a default value. This is not possible if the table is not empty.
  - The required column `wishListProductId` was added to the `WishListProduct` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Admin` DROP FOREIGN KEY `Admin_AdminRoleId_fkey`;

-- DropForeignKey
ALTER TABLE `AnnouncementCustomer` DROP FOREIGN KEY `AnnouncementCustomer_AnnouncementId_fkey`;

-- DropForeignKey
ALTER TABLE `AnnouncementCustomer` DROP FOREIGN KEY `AnnouncementCustomer_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `AnnouncementVendor` DROP FOREIGN KEY `AnnouncementVendor_AnnouncementId_fkey`;

-- DropForeignKey
ALTER TABLE `AnnouncementVendor` DROP FOREIGN KEY `AnnouncementVendor_VendorId_fkey`;

-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_ProductVariantId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrder` DROP FOREIGN KEY `CustomerOrder_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendor` DROP FOREIGN KEY `CustomerOrderVendor_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendor` DROP FOREIGN KEY `CustomerOrderVendor_CustomerOrderId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendor` DROP FOREIGN KEY `CustomerOrderVendor_VendorId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendorProduct` DROP FOREIGN KEY `CustomerOrderVendorProduct_CustomerOrderVendorId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendorProduct` DROP FOREIGN KEY `CustomerOrderVendorProduct_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `CustomerOrderVendorProduct` DROP FOREIGN KEY `CustomerOrderVendorProduct_ProductVariantId_fkey`;

-- DropForeignKey
ALTER TABLE `Delivery` DROP FOREIGN KEY `Delivery_AdminId_fkey`;

-- DropForeignKey
ALTER TABLE `DeliveryOrder` DROP FOREIGN KEY `DeliveryOrder_CustomerOrderVendorId_fkey`;

-- DropForeignKey
ALTER TABLE `DeliveryOrder` DROP FOREIGN KEY `DeliveryOrder_DeliveryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_CategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_VendorId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductImage` DROP FOREIGN KEY `ProductImage_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductVariant` DROP FOREIGN KEY `ProductVariant_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductVariant` DROP FOREIGN KEY `ProductVariant_VariantId_fkey`;

-- DropForeignKey
ALTER TABLE `PurchaseProduct` DROP FOREIGN KEY `PurchaseProduct_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `PurchaseProduct` DROP FOREIGN KEY `PurchaseProduct_ProductVariantId_fkey`;

-- DropForeignKey
ALTER TABLE `PurchaseProduct` DROP FOREIGN KEY `PurchaseProduct_VendorPurchaseId_fkey`;

-- DropForeignKey
ALTER TABLE `VendorPurchase` DROP FOREIGN KEY `VendorPurchase_VendorUserId_fkey`;

-- DropForeignKey
ALTER TABLE `VendorUser` DROP FOREIGN KEY `VendorUser_VendorUserRoleId_fkey`;

-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_ProductId_fkey`;

-- DropForeignKey
ALTER TABLE `WishListProduct` DROP FOREIGN KEY `WishListProduct_ProductVariantId_fkey`;

-- AlterTable
ALTER TABLE `Admin` DROP PRIMARY KEY,
    DROP COLUMN `AdminId`,
    DROP COLUMN `AdminRoleId`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Email`,
    DROP COLUMN `IsActive`,
    DROP COLUMN `Name`,
    DROP COLUMN `Password`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `adminId` VARCHAR(191) NOT NULL,
    ADD COLUMN `adminRoleId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`adminId`);

-- AlterTable
ALTER TABLE `AdminRole` DROP PRIMARY KEY,
    DROP COLUMN `AdminRoleId`,
    DROP COLUMN `Name`,
    ADD COLUMN `adminRoleId` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`adminRoleId`);

-- AlterTable
ALTER TABLE `Announcement` DROP PRIMARY KEY,
    DROP COLUMN `AnnouncementId`,
    DROP COLUMN `Content`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Image`,
    DROP COLUMN `Title`,
    DROP COLUMN `Type`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `announcementId` VARCHAR(191) NOT NULL,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`announcementId`);

-- AlterTable
ALTER TABLE `AnnouncementCustomer` DROP PRIMARY KEY,
    DROP COLUMN `AnnouncementCustomerId`,
    DROP COLUMN `AnnouncementId`,
    DROP COLUMN `CustomerId`,
    ADD COLUMN `announcementCustomerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `announcementId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`announcementCustomerId`);

-- AlterTable
ALTER TABLE `AnnouncementVendor` DROP PRIMARY KEY,
    DROP COLUMN `AnnouncementId`,
    DROP COLUMN `AnnouncementVendorId`,
    DROP COLUMN `VendorId`,
    ADD COLUMN `announcementId` VARCHAR(191) NOT NULL,
    ADD COLUMN `announcementVendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`announcementVendorId`);

-- AlterTable
ALTER TABLE `CartProduct` DROP PRIMARY KEY,
    DROP COLUMN `CartProductId`,
    DROP COLUMN `CustomerId`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductVariantId`,
    ADD COLUMN `cartProductId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`cartProductId`);

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    DROP COLUMN `CategoryId`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Name`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `categoryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`categoryId`);

-- AlterTable
ALTER TABLE `Customer` DROP PRIMARY KEY,
    DROP COLUMN `Address`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `CustomerId`,
    DROP COLUMN `Email`,
    DROP COLUMN `Image`,
    DROP COLUMN `Name`,
    DROP COLUMN `Password`,
    DROP COLUMN `Phone`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`customerId`);

-- AlterTable
ALTER TABLE `CustomerOrder` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `CustomerId`,
    DROP COLUMN `CustomerOrderId`,
    DROP COLUMN `DeliveryAddress`,
    DROP COLUMN `DeliveryMethod`,
    DROP COLUMN `DeliveryPrice`,
    DROP COLUMN `OrderCode`,
    DROP COLUMN `OrderStatus`,
    DROP COLUMN `TotalPrice`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerOrderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryMethod` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryPrice` DOUBLE NOT NULL,
    ADD COLUMN `orderCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `orderStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `totalPrice` DOUBLE NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`customerOrderId`);

-- AlterTable
ALTER TABLE `CustomerOrderVendor` DROP PRIMARY KEY,
    DROP COLUMN `CustomerId`,
    DROP COLUMN `CustomerOrderId`,
    DROP COLUMN `CustomerOrderVendorId`,
    DROP COLUMN `CustomerOrderVendorStatus`,
    DROP COLUMN `DeliveryAddress`,
    DROP COLUMN `VendorId`,
    DROP COLUMN `VendorName`,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerOrderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerOrderVendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerOrderVendorStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`customerOrderVendorId`);

-- AlterTable
ALTER TABLE `CustomerOrderVendorProduct` DROP PRIMARY KEY,
    DROP COLUMN `CustomerOrderVendorId`,
    DROP COLUMN `CustomerOrderVendorProductId`,
    DROP COLUMN `OrderVendorProductStatus`,
    DROP COLUMN `Price`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductName`,
    DROP COLUMN `ProductVariantId`,
    DROP COLUMN `Quantity`,
    DROP COLUMN `VariantName`,
    DROP COLUMN `VendorName`,
    ADD COLUMN `customerOrderVendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerOrderVendorProductId` VARCHAR(191) NOT NULL,
    ADD COLUMN `orderVendorProductStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantId` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `variantName` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`customerOrderVendorProductId`);

-- AlterTable
ALTER TABLE `Delivery` DROP PRIMARY KEY,
    DROP COLUMN `AdminId`,
    DROP COLUMN `CompleteAt`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `DeliveryCode`,
    DROP COLUMN `DeliveryId`,
    DROP COLUMN `DeliveryName`,
    DROP COLUMN `DeliveryStatus`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `adminId` VARCHAR(191) NOT NULL,
    ADD COLUMN `completeAt` DATETIME(3) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deliveryCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`deliveryId`);

-- AlterTable
ALTER TABLE `DeliveryOrder` DROP PRIMARY KEY,
    DROP COLUMN `CustomerOrderVendorId`,
    DROP COLUMN `DeliveryId`,
    DROP COLUMN `DeliveryName`,
    DROP COLUMN `DeliveryOrderId`,
    DROP COLUMN `DeliveryOrderStatus`,
    DROP COLUMN `EndAt`,
    DROP COLUMN `StartAt`,
    ADD COLUMN `customerOrderVendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryOrderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `deliveryOrderStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `endAt` DATETIME(3) NOT NULL,
    ADD COLUMN `startAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`deliveryOrderId`);

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `CategoryId`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Description`,
    DROP COLUMN `IsActive`,
    DROP COLUMN `Name`,
    DROP COLUMN `Price`,
    DROP COLUMN `PrimaryImage`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `Promotion`,
    DROP COLUMN `PromotionPrice`,
    DROP COLUMN `Stock`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VendorId`,
    DROP COLUMN `Weight`,
    ADD COLUMN `categoryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `primaryImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `promotion` BOOLEAN NOT NULL,
    ADD COLUMN `promotionPrice` DOUBLE NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vendorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `weight` DOUBLE NOT NULL,
    ADD PRIMARY KEY (`productId`);

-- AlterTable
ALTER TABLE `ProductImage` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Image`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductImageId`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productImageId` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`productImageId`);

-- AlterTable
ALTER TABLE `ProductVariant` DROP PRIMARY KEY,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductVariantId`,
    DROP COLUMN `VariantId`,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantId` VARCHAR(191) NOT NULL,
    ADD COLUMN `variantId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`productVariantId`);

-- AlterTable
ALTER TABLE `PurchaseProduct` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductVariantId`,
    DROP COLUMN `PurchasePrice`,
    DROP COLUMN `PurchaseProductId`,
    DROP COLUMN `Quantity`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VendorPurchaseId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantId` VARCHAR(191) NOT NULL,
    ADD COLUMN `purchasePrice` DOUBLE NOT NULL,
    ADD COLUMN `purchaseProductId` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vendorPurchaseId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`purchaseProductId`);

-- AlterTable
ALTER TABLE `Variant` DROP PRIMARY KEY,
    DROP COLUMN `Color`,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Name`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VariantId`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `variantId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`variantId`);

-- AlterTable
ALTER TABLE `Vendor` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Email`,
    DROP COLUMN `Image`,
    DROP COLUMN `IsActive`,
    DROP COLUMN `Name`,
    DROP COLUMN `Password`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VendorId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vendorId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`vendorId`);

-- AlterTable
ALTER TABLE `VendorPurchase` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `PurchaseAt`,
    DROP COLUMN `PurchaseCode`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VendorPurchaseId`,
    DROP COLUMN `VendorUserId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `purchaseAt` DATETIME(3) NOT NULL,
    ADD COLUMN `purchaseCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vendorPurchaseId` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorUserId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`vendorPurchaseId`);

-- AlterTable
ALTER TABLE `VendorUser` DROP PRIMARY KEY,
    DROP COLUMN `CreateAt`,
    DROP COLUMN `Email`,
    DROP COLUMN `IsActive`,
    DROP COLUMN `Name`,
    DROP COLUMN `Password`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `VendorUserId`,
    DROP COLUMN `VendorUserRoleId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `vendorUserId` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorUserRoleId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`vendorUserId`);

-- AlterTable
ALTER TABLE `VendorUserRole` DROP PRIMARY KEY,
    DROP COLUMN `Name`,
    DROP COLUMN `VendorUserRoleId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorUserRoleId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`vendorUserRoleId`);

-- AlterTable
ALTER TABLE `WishListProduct` DROP PRIMARY KEY,
    DROP COLUMN `CustomerId`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductVariantId`,
    DROP COLUMN `WishListProductId`,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productVariantId` VARCHAR(191) NOT NULL,
    ADD COLUMN `wishListProductId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`wishListProductId`);

-- AddForeignKey
ALTER TABLE `AnnouncementVendor` ADD CONSTRAINT `AnnouncementVendor_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`vendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementVendor` ADD CONSTRAINT `AnnouncementVendor_announcementId_fkey` FOREIGN KEY (`announcementId`) REFERENCES `Announcement`(`announcementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementCustomer` ADD CONSTRAINT `AnnouncementCustomer_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnnouncementCustomer` ADD CONSTRAINT `AnnouncementCustomer_announcementId_fkey` FOREIGN KEY (`announcementId`) REFERENCES `Announcement`(`announcementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_adminRoleId_fkey` FOREIGN KEY (`adminRoleId`) REFERENCES `AdminRole`(`adminRoleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_variantId_fkey` FOREIGN KEY (`variantId`) REFERENCES `Variant`(`variantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`adminId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendorUser` ADD CONSTRAINT `VendorUser_vendorUserRoleId_fkey` FOREIGN KEY (`vendorUserRoleId`) REFERENCES `VendorUserRole`(`vendorUserRoleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_vendorPurchaseId_fkey` FOREIGN KEY (`vendorPurchaseId`) REFERENCES `VendorPurchase`(`vendorPurchaseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WishListProduct` ADD CONSTRAINT `WishListProduct_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendorPurchase` ADD CONSTRAINT `VendorPurchase_vendorUserId_fkey` FOREIGN KEY (`vendorUserId`) REFERENCES `VendorUser`(`vendorUserId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrder` ADD CONSTRAINT `CustomerOrder_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryOrder` ADD CONSTRAINT `DeliveryOrder_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`deliveryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryOrder` ADD CONSTRAINT `DeliveryOrder_customerOrderVendorId_fkey` FOREIGN KEY (`customerOrderVendorId`) REFERENCES `CustomerOrderVendor`(`customerOrderVendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`vendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_customerOrderId_fkey` FOREIGN KEY (`customerOrderId`) REFERENCES `CustomerOrder`(`customerOrderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendor` ADD CONSTRAINT `CustomerOrderVendor_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_productVariantId_fkey` FOREIGN KEY (`productVariantId`) REFERENCES `ProductVariant`(`productVariantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerOrderVendorProduct` ADD CONSTRAINT `CustomerOrderVendorProduct_customerOrderVendorId_fkey` FOREIGN KEY (`customerOrderVendorId`) REFERENCES `CustomerOrderVendor`(`customerOrderVendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`vendorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
