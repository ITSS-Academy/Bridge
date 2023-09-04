import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PageEmptyComponent } from './page-empty/page-empty.component';
import { PageWContentComponent } from './page-w-content/page-w-content.component';
import { ThirdNavbarComponent } from '../task/third-navbar/third-navbar.component';

@NgModule({
  declarations: [
    TaskComponent,
    PageEmptyComponent,
    PageWContentComponent,
    ThirdNavbarComponent,
  ],
  imports: [CommonModule, TaskRoutingModule, SharedModule],
})
export class TaskModule {}
