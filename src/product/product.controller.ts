import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Headers('Vendor') vendorId: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    createProductDto.vendorId = vendorId;
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Headers('Vendor') vendorId: string) {
    return this.productService.findAll(vendorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: Prisma.ProductUpdateInput,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/toggle-status')
  toggleStatus(@Param('id') id: string) {
    return this.productService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/update-image')
  updateImage(@Param('id') id: string, @Body() updateImageDto: string) {
    return this.productService.updateImage(id, updateImageDto);
  }
}
