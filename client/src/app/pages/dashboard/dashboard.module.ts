import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CustomListComponent } from 'src/app/pages/dashboard/custom-list.component';
import {TuiDataListModule} from '@taiga-ui/core'
import {TuiCalendarModule} from '@taiga-ui/core';
@NgModule({
  declarations: [
    DashboardComponent,
    CustomListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    TuiDataListModule,
    TuiCalendarModule
  ]
})
export class DashboardModule { }
