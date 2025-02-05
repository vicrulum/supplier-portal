import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderConfirmationComponent } from '../main-screen/order-confirmation/order-confirmation.component';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe, CommonModule, MatDialogModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  products: Product[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  readonly dialog = inject(MatDialog);

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

  openDialog() {
    const dialogRef = this.dialog.open(OrderConfirmationComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
