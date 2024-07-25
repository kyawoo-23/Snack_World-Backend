import { Module } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CartProductController } from './cart-product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CartProductController],
  providers: [CartProductService],
  imports: [DatabaseModule],
})
export class CartProductModule {}
