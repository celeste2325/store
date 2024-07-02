import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Product} from '@shared/models/product.model';
import {TimeAgoPipe} from "@shared/pipes/timeAgo";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
