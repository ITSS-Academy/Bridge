import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';

import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { TuiSvgModule } from '@taiga-ui/core';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';





@NgModule({
  declarations: [FirstNavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    TuiArcChartModule,
    TuiSvgModule,
  ],
  exports: [
    TuiArcChartModule,
    FirstNavbarComponent,
    TuiSvgModule,
    SidebarComponent

  ]
})
export class SharedModule { }
