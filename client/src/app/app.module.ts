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
import { SubNavbarMainComponent } from './components/sub-navbar-main/sub-navbar-main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignUpReducer } from './pages/signup/ngrx/reducer/signup.reducer';
import { SignUpEffect } from './pages/signup/ngrx/effect/signup.effect';
import { loginReducer } from './pages/login/ngrx/reducer/login.reducer';
import { LoginEffect } from './pages/login/ngrx/effect/login.effect';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LeadEffect } from './pages/leads/ngrx/effect/lead.effect';
import { leadReducer } from './pages/leads/ngrx/reducer/lead.reducer';
import { organizationReducer } from './pages/organizations/ngrx/reducer/organization.reducer';
import { OrganizationEffect } from './pages/organizations/ngrx/effect/organization.effect';
import { contactReducer } from './pages/contacts/components-contacts/ngrx/reducer/contact.reducer';
import { ContactEffect } from './pages/contacts/components-contacts/ngrx/effect/contact.effect';
import { TaskEffect } from './pages/task/ngrx/effect/task.effect';
import { taskReducer } from './pages/task/ngrx/reducer/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    // SecondNavbarComponent,
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
      login: loginReducer,
      lead: leadReducer,
      organization: organizationReducer,
      contact: contactReducer,
      task: taskReducer
    }, {}),
    EffectsModule.forRoot([
      SignUpEffect,
      LoginEffect,
      LeadEffect,
      OrganizationEffect,
      ContactEffect,
      TaskEffect
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  exports: [SharedModule],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
