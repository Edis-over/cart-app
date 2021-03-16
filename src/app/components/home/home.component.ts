import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ["assets/images/fried-chicken.jpg", "assets/images/fries.jpg", "assets/images/pizza.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
