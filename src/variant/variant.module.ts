import { Module } from '@nestjs/common';
import { VariantService } from './variant.service';
import { VariantController } from './variant.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VariantController],
  providers: [VariantService],
  imports: [DatabaseModule],
})
export class VariantModule {}
