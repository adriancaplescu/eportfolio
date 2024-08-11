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

  updateProduct(): boolean {
    if (this.id !== undefined) {
      this.productService.updateProduct(this.id, this.product).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/products']);
        },
        (err) => console.log(err)
      );
    }
    return false;
  }
}

// deleteProduct(id: number) {
//   this.productService.deleteProduct(id).subscribe(
//     res => {
//       console.log(res);
//       this.router.navigate(['/products']);
//     },
//     err => console.log(err)
//   );
// }
