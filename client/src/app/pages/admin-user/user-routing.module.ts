import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserViewsComponent } from './components/user-views/user-views.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    {path: 'user-views', component: UserViewsComponent, data: { breadcumb : "Users"}},
    {path: 'user-info', component: UserInfoComponent, data: { breadcumb : "User Info"}},
  ]},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
