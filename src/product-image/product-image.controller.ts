import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('product-image')
@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}

  @Post(':id')
  add(
    @Param('id') id: string,
    @Body() createProductImageDto: { productImages: string[] },
  ) {
    return this.productImageService.create(id, createProductImageDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductImageDto: Prisma.ProductImageUpdateInput,
  ) {
    return this.productImageService.update(id, updateProductImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productImageService.remove(id);
  }
}
