import {Component, signal} from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";
import {Product} from "../../../shared/models/product.model"

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

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
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        createAt: new Date().toISOString()
      }
    ]
    this.products.set(initProduct);
  }

  fromChild(event: string) {
    alert(event)
  }
}
