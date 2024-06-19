import {Component, inject, signal} from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";
import {Product} from "../../../shared/models/product.model"
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {CartServiceTsService} from "../../../shared/services/cart.service.ts.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartServiceTsService);

  constructor() {
    const initProduct: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=27',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=28',
        createAt: new Date().toISOString()
      }
    ]
    this.products.set(initProduct);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
