import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) }, { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) }, { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'admin-groups', loadChildren: () => import('./pages/admin-groups/admin-groups.module').then(m => m.AdminGroupsModule) }
  ,
{ path: 'user', loadChildren: () => import('./pages/admin-user/user.module').then(m => m.UserModule) },
{ path: 'display-group', loadChildren: () => import('./pages/display-group/display-group.module').then(m => m.DisplayGroupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
