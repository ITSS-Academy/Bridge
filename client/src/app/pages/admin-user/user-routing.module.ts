import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [{ path: '', component: UserComponent }, { path: 'user-management', loadChildren: () => import('./sub-admin-user-pages/user-management/user-management.module').then(m => m.UserManagementModule) },
{path: 'user-info', component: UserInfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
