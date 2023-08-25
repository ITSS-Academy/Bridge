import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGroupsRoutingModule } from './admin-groups-routing.module';
import { AdminGroupsComponent } from './admin-groups.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TableGroupsComponent } from './components-admin-groups/table-groups/table-groups.component';

@NgModule({
  declarations: [
    AdminGroupsComponent,
    TableGroupsComponent
  ],
  imports: [
    CommonModule,
    AdminGroupsRoutingModule,
    SharedModule,

  ]
})
export class AdminGroupsModule { }
