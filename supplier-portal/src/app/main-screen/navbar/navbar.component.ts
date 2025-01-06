import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  listItems: any[] = [
    {id:1, name: "Nuevos productos"},
    {id:2, name: "Pollo"},
    {id:3, name: "Cerdo"},
    {id:4, name: "Res"},
    {id:5, name: "Papas y otros"},
    {id:6, name: "Aceites y mantecas"},
    {id:7, name: "Mariscos"},
    {id:8, name: "Salsas"},
    {id:9, name: "Aderezos"},
  ]

}
