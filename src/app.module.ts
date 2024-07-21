import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminRolesModule } from './admin-roles/admin-roles.module';
import { AdminModule } from './admin/admin.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CategoryModule } from './category/category.module';
import { VendorModule } from './vendor/vendor.module';
import { VendorUserRolesModule } from './vendor-user-roles/vendor-user-roles.module';
import { VendorUserModule } from './vendor-user/vendor-user.module';
import { VariantModule } from './variant/variant.module';
import { AnnouncementCustomerModule } from './announcement-customer/announcement-customer.module';
import { AnnouncementVendorModule } from './announcement-vendor/announcement-vendor.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ProductModule } from './product/product.module';
import { ProductVariantModule } from './product-variant/product-variant.module';
import { ProductImageModule } from './product-image/product-image.module';
import { VendorPurchaseModule } from './vendor-purchase/vendor-purchase.module';

@Module({
  imports: [
    DatabaseModule,
    AdminRolesModule,
    AdminModule,
    DeliveryModule,
    CategoryModule,
    VendorModule,
    VendorUserRolesModule,
    VendorUserModule,
    AnnouncementModule,
    AnnouncementVendorModule,
    AnnouncementCustomerModule,
    VariantModule,
    ProductModule,
    ProductVariantModule,
    ProductImageModule,
    VendorPurchaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
