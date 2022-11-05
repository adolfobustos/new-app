import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: product[] = [];
  cartList: BehaviorSubject<product[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(product: product) {
    let item: any = this._cartList.find((v1) => v1.nombre == product.nombre);
    if (!item) {
      this._cartList.push({ ...product });
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }
}
