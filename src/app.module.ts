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

@Module({
  imports: [DatabaseModule, AdminRolesModule, AdminModule, DeliveryModule, CategoryModule, VendorModule, VendorUserRolesModule, VendorUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
