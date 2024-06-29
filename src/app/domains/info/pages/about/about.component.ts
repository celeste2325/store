import {Component} from '@angular/core';
import {HeaderComponent} from "@shared/components/header/header.component";
import {ProductComponent} from "@products/components/product/product.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
