import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';
import { ThirdNavbarComponent } from '../deals/third-navbar/third-navbar.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    DealsComponent,
    PageEmptyComponent,
    PageWContentComponent,
    ThirdNavbarComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    SharedModule
  ]
})
export class DealsModule { }
