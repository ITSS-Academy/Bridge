import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { Observable, map } from 'rxjs';
import { EventState } from './ngrx/state/event.state';
import { Store } from '@ngrx/store';
import { EventAction } from './ngrx/action/event.action';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  title = 'Events';
  pageEmpty = true;

  event$!: Observable<EventState>
  subEvents: any[] = [];

  constructor(private eventService: EventsService, private store: Store<{ event: EventState }>) {
    this.event$ = store.select('event');

  }
  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.store.dispatch(EventAction.getEvents());
  }


}
