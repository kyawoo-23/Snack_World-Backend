import { Module } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariantController } from './product-variant.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProductVariantController],
  providers: [ProductVariantService],
  imports: [DatabaseModule],
})
export class ProductVariantModule {}
