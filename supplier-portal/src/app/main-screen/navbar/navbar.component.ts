import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, MatInputModule, MatTabsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  categories: any[] = [];

  searchKeyword: string = ''

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.products$.subscribe((products) => {
    //   this.categories = new Set(products.map((product) => product.categoryId))
    // })
  }

  filterProducts(): void {
    this.productService.filterProducts(this.searchKeyword);
  }
}
