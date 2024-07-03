import {Component, inject, Input, signal} from '@angular/core';
import {ProductComponent} from "@products/components/product/product.component";
import {Product} from "@shared/models/product.model"
import {HeaderComponent} from "@shared/components/header/header.component";
import {CartService} from "@shared/services/cart.service";
import {ProductService} from "@shared/services/product.service";
import {LayoutComponent} from "@shared/components/layout/layout.component";
import {CategoryService} from "@shared/services/category.service";
import {Category} from "@shared/models/category";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    LayoutComponent,
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([])
  @Input() categoryId?: string;
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.categoryId)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        }
      })
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (category) => {
        this.categories.set(category);
      }
    })
  }

}
