import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAddNewComponent } from './role-add-new.component';

const routes: Routes = [{ path: '', component: RoleAddNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAddNewRoutingModule { }
