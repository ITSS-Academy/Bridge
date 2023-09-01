import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { ThirdNavbarComponent } from './third-navbar/third-navbar.component';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    OrganizationsComponent,
    ThirdNavbarComponent,
    PageEmptyComponent,
    PageWContentComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    SharedModule
  ]
})
export class OrganizationsModule { }
