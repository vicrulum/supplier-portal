import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { API_KEY, GoogleSheetsDbService  } from 'ng-google-sheets-db';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainScreenComponent, HttpClientModule],
  providers:[
    {
      provide: API_KEY,
      useValue: 'AIzaSyDSKfb5dFXS1izDOCiZNWmcmI0OcBh9I5Q'
    },
  GoogleSheetsDbService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'supplier-portal';
}
