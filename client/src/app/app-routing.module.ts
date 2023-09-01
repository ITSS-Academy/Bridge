import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin-groups',
    loadChildren: () =>
      import('./pages/admin-groups/admin-groups.module').then(
        (m) => m.AdminGroupsModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/admin-user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'role-add-new',
    loadChildren: () =>
      import('./pages/role-add-new/role-add-new.module').then(
        (m) => m.RoleAddNewModule
      ),
  },
  {
    path: 'role-view2',
    loadChildren: () =>
      import('./pages/role-view2/role-view2.module').then(
        (m) => m.RoleView2Module
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'lead',
    loadChildren: () =>
      import('./pages/lead/lead.module').then((m) => m.LeadModule),
  },
  {
    path: 'display-group',
    loadChildren: () =>
      import('./pages/display-group/display-group.module').then(
        (m) => m.DisplayGroupModule
      ),
  },
  {
    path: 'role-view1',
    loadChildren: () =>
      import('./pages/role-view1/role-view1.module').then(
        (m) => m.RoleView1Module
      ),
  },
  {
    path: 'admin-users',
    loadChildren: () =>
      import('./pages/admin-users/admin-users.module').then(
        (m) => m.AdminUsersModule
      ),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./pages/organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  { 
    path: 'contacts', 
    loadChildren: () => 
    import('./pages/contacts/contacts.module').then
    (m => m.ContactsModule), 
  },
  { path: 'tasks', loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule) },
  { path: 'cases', loadChildren: () => import('./pages/case/case.module').then(m => m.CaseModule) },
  { path: 'deals', loadChildren: () => import('./pages/deal/deal.module').then(m => m.DealModule) },
  { path: 'events', loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
