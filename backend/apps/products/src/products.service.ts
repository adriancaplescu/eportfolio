import { Injectable } from '@nestjs/common';
import {
  CreateProductDto,
  Product,
  ProductsRepository,
  UpdateProductDto,
} from '@app/common';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getHello(): string {
    return 'Hello World!!';
  }

  async createProduct(
    file: Express.Multer.File,
    createProductDto: CreateProductDto,
  ) {
    const plainInstanceOfProduct = plainToInstance(
      CreateProductDto,
      createProductDto,
    );
    const product = new Product({ ...plainInstanceOfProduct });

    product.image = `http://localhost:3000/uploads/${file.filename}`;

    return this.productsRepository.create(product);
  }

  async findAllProducts() {
    return this.productsRepository.find({});
  }

  async findOneProduct(id: number) {
    return this.productsRepository.findOne({ id });
  }

  async updateProduct(
    id: number,
    file: Express.Multer.File,
    updateProductDto: any,
  ) {
    const updateProduct = plainToInstance(UpdateProductDto, updateProductDto);

    if (file) {
      updateProduct.image = `http://localhost:3000/uploads/${file.filename}`;
    }
    return this.productsRepository.findOneAndUpdate({ id }, updateProduct);
  }

  async deleteProduct(id: number) {
    return this.productsRepository.findOneAndDelete({ id });
  }
}
