import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*
Bootstraps an instance of an Angular application and renders a
standalone component as the application's root component.
*/

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
