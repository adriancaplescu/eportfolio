import { CreateProductDto, UpdateProductDto } from '@app/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { plainToInstance } from 'class-transformer';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,
  ) {
    const createProductDto = plainToInstance(CreateProductDto, body);
    createProductDto.image = `http://localhost:3000/uploads/${file.filename}`;

    return this.productsService.createProduct(createProductDto);
  }

  @Get('find-all')
  async findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get('find-one/:id')
  async findOneProduct(@Param('id') id: string) {
    return this.productsService.findOneProduct(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async updateProduct(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UpdateProductDto,
  ) {
    console.log('value in controller is :', body.displayStatus);
    return this.productsService.updateProduct(+id, file, body);
  }

  // @Patch('update-display/:id')
  // async updateDisplay(
  //   @Param('id') id: string,
  //   @Body () body: any,
  //   return this.prod
  // )

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(+id);
  }
}
