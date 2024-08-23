import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { VariantService } from './variant.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('variant')
@Controller('variant')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Post()
  create(@Body() createVariantDto: Prisma.VariantCreateInput) {
    return this.variantService.create(createVariantDto);
  }

  @Get()
  findAll() {
    return this.variantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVariantDto: Prisma.VariantUpdateInput,
  ) {
    return this.variantService.update(id, updateVariantDto);
  }
}
