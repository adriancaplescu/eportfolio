import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  selectedProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }

  updateDisplayStatus(product: Product) {
    this.productService
      .updateProduct(product.id, { displayStatus: product.displayStatus })
      .subscribe({
        next: (res) => {
          console.log(`Display status updated for product ID: ${product.id}`);
        },
        error: (err) => {
          console.log('Error updating display status:', err);
        },
      });
  }
}
