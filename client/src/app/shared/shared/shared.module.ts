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
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FirstNavbarComponent, NavbarUserManagementComponent,SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,
    ReactiveFormsModule
  ],
  exports: [
    //modules
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,
    ReactiveFormsModule,
    //components
    FirstNavbarComponent,
    NavbarUserManagementComponent,
    SidebarComponent,
    
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
