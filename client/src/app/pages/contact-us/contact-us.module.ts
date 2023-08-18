import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { FormContactComponent } from './components-contact/form-contact/form-contact.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ContactUsComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
  ]
})
export class ContactUsModule { }
