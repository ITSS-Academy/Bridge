import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleAddNewRoutingModule } from './role-add-new-routing.module';
import { RoleAddNewComponent } from './role-add-new.component';


@NgModule({
  declarations: [
    RoleAddNewComponent
  ],
  imports: [
    CommonModule,
    RoleAddNewRoutingModule
  ]
})
export class RoleAddNewModule { }
