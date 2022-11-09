import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data = [];
  productItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    return this.data;
  }

  getCartItemCount() {
    return this.productItemCount;
  }

  addProduct(producto) {
    let added = false;
    for (let p of this.data) {
      console.log(this.data);
      if (p.id === producto.id) {
        p.cantidad += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      producto.cantidad = 1;
      this.data.push(producto);
    }
    this.productItemCount.next(this.productItemCount.value + 1);
    console.log(producto);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.data.entries()) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad == 0) {
          this.data.splice(index, 1);
        }
      }
    }
    this.productItemCount.next(this.productItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.data.entries()) {
      if (p.id === product.id) {
        this.productItemCount.next(this.productItemCount.value - p.cantidad);
        this.data.splice(index, 1);
      }
    }
  }
  clearCart() {
    this.data = [];
    this.productItemCount.next(0);
  }

}
