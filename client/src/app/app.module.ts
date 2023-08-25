import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_SANITIZER, TuiAlertModule, TuiDialogModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Taiga UI

import { SharedModule } from './shared/shared/shared.module';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { SubNavbarMainComponent } from './components/sub-navbar-main/sub-navbar-main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignUpReducer } from './pages/signup/ngrx/reducer/signup.reducer';
import { SignUpEffect } from './pages/signup/ngrx/effect/signup.effect';
import { loginReducer } from './pages/login/ngrx/reducer/login.reducer';
import { LoginEffect } from './pages/login/ngrx/effect/login.effect';

@NgModule({
  declarations: [
    AppComponent,
    SecondNavbarComponent,
    SubNavbarMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,

    StoreModule.forRoot({
      signup: SignUpReducer,
      login: loginReducer
    }, {}),
    EffectsModule.forRoot([
      SignUpEffect,
      LoginEffect
    ])
  ],
  exports: [SharedModule],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
