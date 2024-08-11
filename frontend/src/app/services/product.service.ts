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
    console.log(title);
    console.log(description);
    console.log(file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('displayStatus', displayStatus.toString());
    formData.append('image', file);

    formData.forEach((value, key) => {
      console.log(`Key: ${key}, Value: ${value}`);
    });

    return this.http.post(this.apiUrl, formData);
  }

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/find-all`);
  }
}
