import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export default class ProductFormComponent implements OnInit {
  file?: File;
  imageSelected?: string | ArrayBuffer | null = null;
  selectedValue?: boolean;
  imageError: boolean = false;

  product = {
    title: '',
    description: '',
    link: '',
    displayStatus: false,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      this.file = input.files[0];
      this.imageError = false;

      const reader = new FileReader();
      reader.onload = () => (this.imageSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  createProduct(form: NgForm): boolean {
    if (form.invalid || !this.file) {
      this.markAllAsTouched(form);
      this.imageError = !this.file;
      return false;
    }

    this.productService
      .createProduct(
        this.product.title,
        this.product.description,
        this.product.link,
        this.product.displayStatus,
        this.file
      )
      .subscribe({
        next: (res) => {
          this.router.navigate(['/products']);
        },
        error: (err) => console.log(err),
        complete: () => console.log('Product creation completed'),
      });

    return false;
  }

  private markAllAsTouched(form: NgForm): void {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
