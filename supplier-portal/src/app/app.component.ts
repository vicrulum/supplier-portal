import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supplier-portal';
}
