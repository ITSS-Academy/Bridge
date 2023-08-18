import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';

import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { TuiDropdownModule, TuiRootModule, TuiSvgModule } from '@taiga-ui/core';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { TuiDataListModule } from '@taiga-ui/core';



@NgModule({
  declarations: [FirstNavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    TuiArcChartModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiRootModule,
  ],
  exports: [
    TuiArcChartModule,
    FirstNavbarComponent,
    TuiSvgModule,
    SidebarComponent,
    TuiDataListModule,
    TuiDropdownModule,
    TuiRootModule,

  ]
})
export class SharedModule { }
