import { createAction, props } from "@ngrx/store";
import { Event } from "src/app/models/event.model";

export const EventAction = {
  addEvent: createAction('[Event] Add Event', props<{ event: Event}>()),
  addEventSuccess: createAction('[Event] Add Event Success', props<{ event: Event}>()),
  addEventFailure: createAction('[Event] Add Event Failure', props<{ error: any }>()),

  getEvents: createAction('[Event] Get Events'),
  getEventsSuccess: createAction('[Event] Get Events Success', props<{ events: any[] }>()),
  getEventsFailure: createAction('[Event] Get Events Failure', props<{ error: any }>()),


  updateEvent: createAction('[Event] Update Event', props<{ event: any}>()),
  updateEventSuccess: createAction('[Event] Update Event Success'),
  updateEventFailure: createAction('[Event] Update Event Failure', props<{ error: any }>()),

  deleteEvent: createAction('[Event] Delete Event', props<{ id: string}>()),
  deleteEventSuccess: createAction('[Event] Delete Event Success'),
  deleteEventFailure: createAction('[Event] Delete Event Failure', props<{ error: any }>()),

  getEvent: createAction('[Event] Get Event', props<{ id: string}>()),
  getEventSuccess: createAction('[Event] Get Event Success', props<{ event: any }>()),
  getEventFailure: createAction('[Event] Get Event Failure', props<{ error: any }>()),

  

}