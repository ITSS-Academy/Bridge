import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

// bootstrapApplication(AppComponent, {
//   providers:[importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule, BrowserAnimationsModule), provideAnimations()],
// }).catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
	bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule), provideAnimations(), provideStore(), provideEffects(), provideAnimations(), provideAnimations(), provideAnimations(), provideAnimations()],
  }).catch(err => console.error(err));
