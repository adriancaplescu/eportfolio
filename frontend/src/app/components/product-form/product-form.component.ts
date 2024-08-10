import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export default class ProductFormComponent implements OnInit {
  file?: File;
  imageSelected?: string | ArrayBuffer | null = null;
  selectedValue?: boolean;

  constructor(private productService: ProductService, private router: Router) {
    this.selectedValue = false;
  }

  ngOnInit() {}

  onProductSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      this.file = input.files[0];

      // image preview
      const reader = new FileReader();
      reader.onload = () => (this.imageSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  uploadImage(
    title: HTMLInputElement,
    description: HTMLTextAreaElement,
    link: HTMLInputElement,
    displayStatus: boolean
  ): boolean {
    if (this.file) {
      this.productService
        .createProduct(
          title.value,
          description.value,
          link.value,
          displayStatus,
          this.file
        )
        .subscribe(
          (res) => {
            this.router.navigate(['/products']);
          },
          (err) => console.log(err)
        );
    } else {
      console.log('No file selected');
    }
    return false;
  }
}
