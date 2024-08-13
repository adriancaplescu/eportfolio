import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.scss',
})
export class ImagePreviewComponent implements OnInit {
  product: any;
  id?: number;
  file?: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.productService.getOneProduct(this.id).subscribe((data: any) => {
          this.product = data;
        });
      }
    });
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      this.file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.product.image = reader.result;
      };
      reader.readAsDataURL(this.file);
    }
  }

  updateProduct(): boolean {
    if (this.id !== undefined) {
      const formData = new FormData();
      formData.append('title', this.product.title);
      formData.append('description', this.product.description);
      formData.append('link', this.product.link);
      formData.append('displayStatus', this.product.displayStatus);

      if (this.file) {
        formData.append('image', this.file);
      }

      this.productService.updateProduct(this.id, formData).subscribe({
        next: (res) => {
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    return false;
  }

  deleteProduct() {
    if (this.id !== undefined) {
      this.productService.deleteProduct(this.id).subscribe({
        next: (res) => {
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    return false;
  }
}
