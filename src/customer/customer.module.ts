import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/config/jwt.strategy';
import jwtConfig from 'src/config/jwt.config';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [
    DatabaseModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    JwtStrategy,
  ],
})
export class CustomerModule {}
