import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayGroupComponent } from './display-group.component';

const routes: Routes = [{ path: '', component: DisplayGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayGroupRoutingModule { }
