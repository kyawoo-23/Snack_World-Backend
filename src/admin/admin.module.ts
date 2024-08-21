import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/config/jwt.strategy';
import jwtConfig from 'src/config/jwt.config';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
    DatabaseModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    JwtStrategy,
  ],
})
export class AdminModule {}
