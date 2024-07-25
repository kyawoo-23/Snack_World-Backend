import { Module } from '@nestjs/common';
import { WishlistProductService } from './wishlist-product.service';
import { WishlistProductController } from './wishlist-product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [WishlistProductController],
  providers: [WishlistProductService],
  imports: [DatabaseModule],
})
export class WishlistProductModule {}
