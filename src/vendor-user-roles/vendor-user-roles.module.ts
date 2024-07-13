import { Module } from '@nestjs/common';
import { VendorUserRolesService } from './vendor-user-roles.service';
import { VendorUserRolesController } from './vendor-user-roles.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VendorUserRolesController],
  providers: [VendorUserRolesService],
  imports: [DatabaseModule],
})
export class VendorUserRolesModule {}
