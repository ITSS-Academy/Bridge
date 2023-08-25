import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleView1Component } from './role-view1.component';

const routes: Routes = [{ path: '', component: RoleView1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleView1RoutingModule { }
