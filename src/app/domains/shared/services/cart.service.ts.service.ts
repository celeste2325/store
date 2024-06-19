import {computed, Injectable, signal} from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartServiceTsService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() {
  }

  addToCart(product: Product) {
    this.cart.update((prevState => [...prevState, product]))
  }

}
