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

  async createProduct(createProductDto: CreateProductDto) {
    const product = new Product({ ...createProductDto });

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
    console.log('In service value is ', updateProductDto);
    const updateProduct = plainToInstance(UpdateProductDto, updateProductDto);
    console.log('In service value is ', updateProductDto);

    if (file) {
      updateProduct.image = `http://localhost:3000/uploads/${file.filename}`;
    }
    console.log('id  is ', id);
    console.log('Prepared update object for DB:', updateProduct);

    return this.productsRepository.findOneAndUpdate({ id }, updateProduct);
  }

  async deleteProduct(id: number) {
    return this.productsRepository.findOneAndDelete({ id });
  }
}
