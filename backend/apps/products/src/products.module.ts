import { DatabaseModule, Product } from '@app/common';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Product])],

  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
