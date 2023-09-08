import { createReducer, on } from "@ngrx/store";
import { EventState } from "../state/event.state";
import { EventAction } from "../action/event.action";

const initialState: EventState = {
    event: null,
    events: [],
    loading: false,
    status: null,
    error: ''
}

export const eventReducer = createReducer(
  initialState,
  // Add Event
  on(EventAction.addEvent, (state, action) => {
      return {
          ...state,
          event: action.event,
          loading: true,
          status: "Adding event...",
          error: ''
      }
  }),
  on(EventAction.addEventSuccess, (state, action) => {
      return {
          ...state,
          loading: false,
          event: action.event,
          status: "Add event success",
          error: ''
      }
  }),
  on(EventAction.addEventFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Add event failure",
          error: action.error
      }
  }),


  // Get Events
  on(EventAction.getEvents, (state) => {
      return {
          ...state,
          loading: true,
          status: "Getting events...",
          error: ''
      }
  }),
  on(EventAction.getEventsSuccess, (state, action) => {
      return {
          ...state,
          events: action.events,
          loading: false,
          status: "Get events success",
          error: ''
      }
  }),
  on(EventAction.getEventsFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Get events failure",
          error: action.error
      }
  }),

  // Update Event
  on(EventAction.updateEvent, (state, action) => {
      return {
          ...state,
          event: action.event,
          loading: true,
          status: "Updating event...",
          error: ''
      }
  }),
  on(EventAction.updateEventSuccess, (state) => {
      return {
          ...state,
          loading: false,
          status: "Update event success",
          error: ''
      }
  }),
  on(EventAction.updateEventFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Update event failure",
          error: action.error
      }
  }),

  // Delete Event
  on(EventAction.getEvent, (state, action) => {
        // state.loading = false;
      return {
          ...state,
          loading: true,
          status: "Deleting event...",
          error: ''
      }
  }),
  on(EventAction.deleteEventSuccess, (state) => {
      return {
          ...state,
          loading: false,
          status: "Delete event success",
          error: ''
      }
  }),
  on(EventAction.deleteEventFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Delete event failure",
          error: action.error
      }
  }),

  // Get Organization
  on(EventAction.getEvent, (state, action) => {
      return {
          ...state,
          loading: true,
          status: "Getting event...",
          error: ''
      }
  }),
  on(EventAction.getEventSuccess, (state, action) => {
      return {
          ...state,
          event: action.event,
          loading: false,
          status: "Get event success",
          error: ''
      }
  }),
  on(EventAction.getEventFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Get event failure",
          error: action.error
      }
  })
)

