import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-main-screen',
  imports: [BannerComponent, NavbarComponent, ProductsListComponent, ShoppingCartComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {

}
