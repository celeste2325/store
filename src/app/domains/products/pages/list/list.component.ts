import {Component, HostListener, inject, Input, signal} from '@angular/core';
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
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([])
  isDropdownOpen = signal(false);
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

  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#options-menu') && !target.closest('.origin-top-right')) {
      this.isDropdownOpen.set(false);
    }
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
