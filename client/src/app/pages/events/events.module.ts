import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { DisplayNoDataEventsComponent } from './components-events/display-no-data-events/display-no-data-events.component';
import { DisplayDataEventsComponent } from './components-events/display-data-events/display-data-events.component';
import { NavbarEventsComponent } from './components-events/navbar-events/navbar-events.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    EventsComponent,
    DisplayNoDataEventsComponent,
    DisplayDataEventsComponent,
    NavbarEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
  ]
})
export class EventsModule { }
