import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: 'app-products-list',
  imports: [
    CommonModule,
    ListItemComponent
],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  title: string = "Novedades"
  products: any[] = [
    {id: 1, name: "Elote", description: "Caja de elotes con 90 pz", price: 560},
    {id: 2, name: "Boneless", description: "Caja con boneless con 120 pz", price: 1300},
    {id: 3, name: "Mayonesa", description: "30 envases", price: 872},
    {id: 4, name: "Catsup Heinz", description: "25 envases", price: 798},
    {id: 5, name: "Moztaza", description: "32 envases", price: 923},
    {id: 6, name: "Alita de pollo", description: "15 kg", price: 452},
    {id: 7, name: "Deshebrada", description: "10 kg", price: 683},
  ]
}
