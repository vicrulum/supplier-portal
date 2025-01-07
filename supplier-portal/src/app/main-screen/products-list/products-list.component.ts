import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ListItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  title: string = 'Novedades';

  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }
}
