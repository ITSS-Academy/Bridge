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
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
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
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./pages/case/case.module').then((m) => m.CaseModule),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/task/task.module').then((m) => m.TaskModule),
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./pages/case/case.module').then((m) => m.CaseModule),
  },
  {
    path: 'leads',
    loadChildren: () =>
      import('./pages/leads/leads.module').then((m) => m.LeadsModule),
  },
  {
    path: 'deals',
    loadChildren: () =>
      import('./pages/deals/deals.module').then((m) => m.DealsModule),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./pages/organizations/organizations.module').then(
        (m) => m.OrganizationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
