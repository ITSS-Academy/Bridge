import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';
import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { NavbarUserManagementComponent } from 'src/app/components/navbar-user-management/navbar-user-management.component';
import { TuiSvgModule } from '@taiga-ui/core';




@NgModule({
  declarations: [FirstNavbarComponent, NavbarUserManagementComponent],
  imports: [
    CommonModule,
    TuiArcChartModule,
    TuiSvgModule,
  ],
  exports: [
    TuiArcChartModule,
    FirstNavbarComponent,
    TuiSvgModule,
    NavbarUserManagementComponent
  ]
})
export class SharedModule { }
