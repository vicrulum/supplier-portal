import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() productName: string = "Nombre del producto"
  @Input() productDesc: string = "Descripcion del producto"
}
