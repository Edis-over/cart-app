import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Object;
  items: Array<any> = this.cartService.items;

  constructor(private service: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(data => {
        this.products = data;

      })
  }
  addToCart(product) {
    this.cartService.addToCart(product);


  }
  howManyItems() {

    let numberOfItems = 0;
    this.items.forEach(item => {
      numberOfItems += item.quantity;
    })
    return numberOfItems;
  }

}

