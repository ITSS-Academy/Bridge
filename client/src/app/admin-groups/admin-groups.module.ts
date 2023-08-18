  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGroupsRoutingModule } from './admin-groups-routing.module';
import { AdminGroupsComponent } from './admin-groups.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    AdminGroupsComponent
  ],
  imports: [
    CommonModule,
    AdminGroupsRoutingModule,
    SharedModule,
  ]
})
export class AdminGroupsModule { }
