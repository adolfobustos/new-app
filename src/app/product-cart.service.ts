import { Injectable } from '@angular/core';
import { product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  cartList: product[] = [];

  constructor() { }

  addToCart (product: product) {
    this.cartList.push(product);
  }
}
