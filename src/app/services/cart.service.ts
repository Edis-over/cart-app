import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []
  constructor() { }

  addToCart(product) {
    this.items.push(product);
    console.log(this.items)
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
