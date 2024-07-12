import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminRolesModule } from './admin-roles/admin-roles.module';
import { AdminModule } from './admin/admin.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [DatabaseModule, AdminRolesModule, AdminModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
