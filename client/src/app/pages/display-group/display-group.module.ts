import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayGroupRoutingModule } from './display-group-routing.module';
import { DisplayGroupComponent } from './display-group.component';
import { FormInformationComponent } from './components-display-group/form-information/form-information.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    DisplayGroupComponent,
    FormInformationComponent
  ],
  imports: [
    CommonModule,
    DisplayGroupRoutingModule,
    SharedModule
  ]
})
export class DisplayGroupModule { }
