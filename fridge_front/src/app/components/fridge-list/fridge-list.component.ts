import { Product } from './../../dto/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridge-list',
  templateUrl: './fridge-list.component.html',
  styleUrls: ['./fridge-list.component.css']
})
export class FridgeListComponent implements OnInit {

  products: Product[];
  constructor() { }

  ngOnInit() {
    this.initProducts();
  }

  initProducts() {
    this.products = [
      new Product('potato', 1, 'kg'),
      new Product('tomato', 2, 'kg'),
      new Product('mayonnaise', 1, 'piece'),
      new Product('cheese', 0.2, 'kg')
    ];
  }

  printAmount(index: number): string {
    const product = this.products[index];
    if (product.typeAmount === 'kg' && product.amount < 1) {
        return product.amount * 1000 + 'g';
    }
    return product.amount + product.typeAmount;
  }
}
