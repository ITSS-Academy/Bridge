import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NavbarContactsComponent } from './components-contacts/navbar-contacts/navbar-contacts.component';
import { DisplayNoDataContactsComponent } from './components-contacts/display-no-data-contacts/display-no-data-contacts.component';
import { DisplayHaveDataContactsComponent } from './components-contacts/display-have-data-contacts/display-have-data-contacts.component';


@NgModule({
  declarations: [
    ContactsComponent,
    NavbarContactsComponent,
    DisplayNoDataContactsComponent,
    DisplayHaveDataContactsComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
