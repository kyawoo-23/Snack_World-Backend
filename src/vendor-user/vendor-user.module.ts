import { Module } from '@nestjs/common';
import { VendorUserService } from './vendor-user.service';
import { VendorUserController } from './vendor-user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { JwtStrategy } from 'src/config/jwt.strategy';

@Module({
  controllers: [VendorUserController],
  providers: [VendorUserService],
  imports: [
    DatabaseModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    JwtStrategy,
  ],
})
export class VendorUserModule {}
