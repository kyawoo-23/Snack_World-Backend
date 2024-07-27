/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `AdminRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `VendorUserRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AdminRole_name_key` ON `AdminRole`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `VendorUserRole_name_key` ON `VendorUserRole`(`name`);
