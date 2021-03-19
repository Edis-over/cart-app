import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product = new Product
  items = []
  constructor() { }
  

  addToCart(item) {
    if (this.items.includes(item)) {
      item.quantity++;
    } else {
      this.items.push(item);
      item.quantity = 1;
    }

  }
  getItems() {
    return this.items;
  }

  emptyCart() {
    this.items = [];
    return this.items;
  }
  removeItem(index) {
    this.items.splice(index, 1);
  }




}
