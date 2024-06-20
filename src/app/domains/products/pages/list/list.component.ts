import {Component, inject, signal} from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";
import {Product} from "../../../shared/models/product.model"
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {CartServiceTsService} from "../../../shared/services/cart.service.ts.service";
import {ProductService} from "../../../shared/services/product.service";

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
  private productService = inject(ProductService)

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products);
        }
      })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
