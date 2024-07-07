import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminRolesModule } from './admin-roles/admin-roles.module';

@Module({
  imports: [DatabaseModule, AdminRolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
