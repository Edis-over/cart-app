import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();



  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }
  isEmpty() {
    if (this.items.length === 0) { return true }

  }
  empty() {
    return this.items = null;
  }
  getTotal() {
    let total = 0;
    this.items.forEach(item => total += item.quantity * item.price)
    return total;
  }

}
