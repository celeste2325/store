import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) img: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit('Envie un mensaje al padre');
  }
}
