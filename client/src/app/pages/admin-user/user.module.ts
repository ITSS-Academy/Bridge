import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule  } from 'src/app/shared/shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserViewsComponent } from './components/user-views/user-views.component';
// 
@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent,
    UserViewsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
