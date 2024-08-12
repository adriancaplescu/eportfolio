import { DatabaseModule, Product, ProductsRepository } from '@app/common';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Product]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],

  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
