import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = "https://raw.githubusercontent.com/Edis-over/cart-app/main/src/assets/data/products.json"
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(this.baseUrl);

  }
}
