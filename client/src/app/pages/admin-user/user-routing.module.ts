import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes), TuiCheckboxModule,ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule],
})
export class UserRoutingModule {}
