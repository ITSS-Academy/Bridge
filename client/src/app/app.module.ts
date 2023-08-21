import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {    TUI_SANITIZER, TuiAlertModule, TuiDialogModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

//Taiga UI
import {TuiDropdownModule} from '@taiga-ui/core';



import { SharedModule } from './shared/shared/shared.module';
import { LoadingComponent } from './components/loading/loading.component';
import { WarningComponent } from './components/warning/warning.component';
import { ErrorComponent } from './components/error/error.component';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { SubNavbarMainComponent } from './components/sub-navbar-main/sub-navbar-main.component';
import { CdkModule } from './shared/cdk/cdk.module';
import { CoreModule } from './shared/core/core.module';
import { KitModule } from './shared/kit/kit.module';
import { AddOnModule } from './shared/add-on/add-on.module';
import { RoleView2Component } from './pages/role-view2/role-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    WarningComponent,
    ErrorComponent,
    SecondNavbarComponent,
    SubNavbarMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      BrowserAnimationsModule,
      SharedModule,
],
  exports: [
    SharedModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
