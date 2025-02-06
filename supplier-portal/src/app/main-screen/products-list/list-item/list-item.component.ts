import { Component, Input, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-list-item',
  imports: [CurrencyPipe, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() product: Product = new Product()

  quantity: number = 0;

  constructor(private productService: ProductService){}

  // addProduct(product: Product): void {
  //   this.productService.addProduct(product);
  // }

  increase(product: Product): void{
    this.product.quantity++;
    this.productService.addProduct(product);
  }

  decrease(product: Product): void{
    this.product.quantity--;
    this.productService.removeProduct(product);
  }
}
