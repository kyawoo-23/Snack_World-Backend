import { Module } from '@nestjs/common';
import { VendorUserService } from './vendor-user.service';
import { VendorUserController } from './vendor-user.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VendorUserController],
  providers: [VendorUserService],
  imports: [DatabaseModule],
})
export class VendorUserModule {}
