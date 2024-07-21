import { Controller, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('product-variant')
@Controller('product-variant')
export class ProductVariantController {
  constructor(private readonly productVariantService: ProductVariantService) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductVariantDto: Prisma.ProductVariantUpdateInput,
  ) {
    return this.productVariantService.update(id, updateProductVariantDto);
  }
}
