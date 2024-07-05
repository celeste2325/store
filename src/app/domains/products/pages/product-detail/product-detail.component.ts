import {Component, inject, Input, signal} from '@angular/core';
import {ProductService} from '@shared/services/product.service'
import {Product} from "@shared/models/product.model";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";
import {CartService} from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input() id?: string;
  productSelected = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id)
        .subscribe({
          next: (product) => {
            console.log(product);
            this.productSelected.set(product);
            if (product.images.length > 0) {
              this.cover.set(product.images[0])
            }
          }
        })
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.productSelected();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
