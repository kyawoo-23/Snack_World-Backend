import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminRolesModule } from './admin-roles/admin-roles.module';
import { AdminModule } from './admin/admin.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CategoryModule } from './category/category.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [DatabaseModule, AdminRolesModule, AdminModule, DeliveryModule, CategoryModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
