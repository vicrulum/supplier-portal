import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  imports: [MatDialogModule, MatButtonModule, MatTableModule, CommonModule, MatIconModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss'
})
export class OrderConfirmationComponent {
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  totalPrice: number = 0;
  totalQuantity: number = 0;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productsInCart$.subscribe((products) => {
      this.products = products;
      this.totalPrice = products.reduce(
        (sum, current) => sum + current.price * current.quantity,
        0
      );
      this.totalQuantity = products.reduce(
        (sum, current) => sum + current.quantity,
        0
      );
    });
  }
}
