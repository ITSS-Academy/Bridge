import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EventAction } from '../action/event.action';
import { Injectable } from '@angular/core';
import { EventsService } from '../../events.service';
import { switchMap, map, catchError, of } from 'rxjs';
import { or } from 'firebase/firestore';

@Injectable()
export class EventEffect {
  constructor(private action$: Actions, private eventService: EventsService) {}

  addEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(EventAction.addEvent),
      switchMap((event: any) => this.eventService.addEvent(event.event)),
      map((event: any) => {
        return EventAction.addEventSuccess({ event: event });
      }),
      catchError((error) => {
        return of(EventAction.addEventFailure({ error: error }));
      })
    )
  );

  deleteEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(EventAction.deleteEvent),
      switchMap((id: any) => this.eventService.deleteEvent(id.id)),
      map(() => {
        return EventAction.deleteEventSuccess();
      }),
      catchError((error) => {
        return of(EventAction.deleteEventFailure({ error: error }));
      })
    )
  );

  getAllEvents$ = createEffect(() =>
    this.action$.pipe(
      ofType(EventAction.getEvents),
      switchMap(() => this.eventService.getAllEventsNgRx()),
      map((events: any) => {
        return EventAction.getEventsSuccess({ events: events });
      }),
      catchError((error) => {
        return of(EventAction.getEventsFailure({ error: error }));
      })
    )
  );

  updateEvent$ = createEffect(() =>
    this.action$.pipe(
      ofType(EventAction.updateEvent),
      switchMap((event: any) => this.eventService.updateEvent(event.event)),
      map((event: any) => {
        return EventAction.updateEventSuccess();
      }),
      catchError((error) => {
        return of(EventAction.updateEventFailure({ error: error }));
      })
    )
  );
}
