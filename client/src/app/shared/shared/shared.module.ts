import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';

import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { TuiSvgModule } from '@taiga-ui/core';





@NgModule({
  declarations: [FirstNavbarComponent],
  imports: [
    CommonModule,
    TuiArcChartModule,
    TuiSvgModule,
  ],
  exports: [
    TuiArcChartModule,
    FirstNavbarComponent,
    TuiSvgModule

  ]
})
export class SharedModule { }
