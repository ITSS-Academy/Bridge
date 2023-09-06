import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';
import { ThirdNavbarComponent } from '../case/third-navbar/third-navbar.component';


@NgModule({
  declarations: [
    CaseComponent,
    PageEmptyComponent,
    PageWContentComponent,
    ThirdNavbarComponent,
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    SharedModule
  ]
})
export class CaseModule { }
