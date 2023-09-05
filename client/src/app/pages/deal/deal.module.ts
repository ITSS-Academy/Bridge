import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealRoutingModule } from './deal-routing.module';
import { DealComponent } from './deal.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';
import { ThirdNavbarComponent } from '../deal/third-navbar/third-navbar.component';


@NgModule({
  declarations: [
    DealComponent,
    PageEmptyComponent,
    PageWContentComponent,
    ThirdNavbarComponent
  ],
  imports: [
    CommonModule,
    DealRoutingModule,
    SharedModule
  ]
})
export class DealModule { }
