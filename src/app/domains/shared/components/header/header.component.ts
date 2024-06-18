import {Component, Input, signal, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  total = signal(0);
  @Input({required: true}) cart: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart']
    if (cart) {
      this.total.set(this.calculateTotal());
    }
  }

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }

  calculateTotal() {
    let total = 0;
    if (this.cart.length > 0) {
      this.cart.forEach((product => {
        total = total + product.price;
      }))
    }
    return total;
  }

}
