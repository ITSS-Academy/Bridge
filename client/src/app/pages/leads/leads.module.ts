import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';
import { ThirdNavbarComponent } from './third-navbar/third-navbar.component';


@NgModule({
  declarations: [
    LeadsComponent,
    PageEmptyComponent,
    PageWContentComponent,
    ThirdNavbarComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    SharedModule
  ]
})
export class LeadsModule { }
