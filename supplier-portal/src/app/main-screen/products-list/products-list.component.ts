import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ListItemComponent, MatTabsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  title: string = 'Novedades';
  categories: Set<string> = new Set(); 

  products: Product[] = [];
  constructor(private productService: ProductService) {}
  
  
  ngOnInit() {
    this.productService.filteredProducts$.subscribe((products) => {
      this.products = products;
    });
    this.productService.products$.subscribe((products) => {
      this.categories = new Set(products.map((product) => product.category))
    })
  }

  changeTab(event: any){
    this.productService.filterProducts(event.tab.textLabel === 'Todo' ? '' : event.tab.textLabel);
  }
}
