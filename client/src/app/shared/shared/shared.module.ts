import { NgModule } from '@angular/core';
import {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import { CommonModule } from '@angular/common';
import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { NavbarUserManagementComponent } from 'src/app/components/navbar-user-management/navbar-user-management.component';
import { KitModule } from '../kit/kit.module';
import { CoreModule } from '../core/core.module';
import { CdkModule } from '../cdk/cdk.module';
import { AddOnModule } from '../add-on/add-on.module';




@NgModule({
  declarations: [FirstNavbarComponent, NavbarUserManagementComponent],
  imports: [
    CommonModule,
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,
  ],
  exports: [
    //modules
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,

    //components
    FirstNavbarComponent,
    NavbarUserManagementComponent,
  ],
  providers: [
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer, 
    },
  ]
})
export class SharedModule { }
