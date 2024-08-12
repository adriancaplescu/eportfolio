import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  createProduct(
    title: string,
    description: string,
    link: string,
    displayStatus: boolean,
    file: File
  ) {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('displayStatus', displayStatus.toString());
    formData.append('image', file);

    return this.http.post(this.apiUrl, formData);
  }

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }

  getOneProduct(id: number) {
    return this.http.get<any>(`${this.apiUrl}/find-one/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
