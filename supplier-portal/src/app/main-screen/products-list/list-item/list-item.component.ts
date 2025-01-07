import { Component, Input, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-item',
  imports: [CurrencyPipe],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() product: Product = new Product()

  constructor(private productService: ProductService){}

  addProduct(product: Product): void {
    this.productService.addProduct(product);
  }
}
