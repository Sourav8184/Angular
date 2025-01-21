import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  /*
    List of providers that should be available to the root component
    and all its children.
  */
  providers: [
    /*
      Provides NgZone-based change detection for the application
      bootstrapped using bootstrapApplication.NgZone is already provided
      in applications by default.
    */
    provideZoneChangeDetection({ eventCoalescing: true }),
    /*
      Sets up providers necessary to enable Router functionality for the
      application. Allows to configure a set of routes as well as extra
      features that should be enabled.
    */
    provideRouter(routes),
  ],
};
