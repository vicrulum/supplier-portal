import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http'; 
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: API_KEY,
      useValue: 'AIzaSyDSKfb5dFXS1izDOCiZNWmcmI0OcBh9I5Q' 
    },
    GoogleSheetsDbService
  ]
};
