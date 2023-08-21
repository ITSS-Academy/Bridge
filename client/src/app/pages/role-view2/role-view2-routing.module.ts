import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleView2Component } from './role-view2.component';

const routes: Routes = [{ path: '', component: RoleView2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleView2RoutingModule { }