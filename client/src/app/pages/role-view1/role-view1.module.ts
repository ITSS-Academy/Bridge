import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleView1RoutingModule } from './role-view1-routing.module';
import { RoleView1Component } from './role-view1.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    RoleView1Component,
  ],
  imports: [
    CommonModule,
    RoleView1RoutingModule,
    SharedModule
  ]
})
export class RoleView1Module { }
