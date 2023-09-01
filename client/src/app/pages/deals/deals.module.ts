import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { ThirdNavbarComponent } from './third-navbar/third-navbar.component';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    DealsComponent,
    ThirdNavbarComponent,
    PageEmptyComponent,
    PageWContentComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    SharedModule
  ]
})
export class DealsModule { }
