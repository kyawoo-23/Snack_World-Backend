import { Module } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { ProductImageController } from './product-image.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProductImageController],
  providers: [ProductImageService],
  imports: [DatabaseModule],
})
export class ProductImageModule {}
