import { Component, Inject, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { EventState } from '../../ngrx/state/event.state';
import { EventAction } from '../../ngrx/action/event.action';
import { Store } from '@ngrx/store';
import { EventsService } from '../../events.service';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TuiDay } from '@taiga-ui/cdk';
@Component({
  selector: 'app-display-data-events',
  templateUrl: './display-data-events.component.html',
  styleUrls: ['./display-data-events.component.scss'],
})
export class DisplayDataEventsComponent {
  @Input()
  event$!: Observable<EventState>;
  currentUser!: any;
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private eventService: EventsService,
    public authService: AuthService,
    private store: Store<{ event: EventState }>,
    private notificationService: NotificationService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.event$ = store.select('event');

    this.eventForm.addControl('eventName', this.eventName);

    console.log(this.currentUser);
  }

  eventForm: FormGroup = new FormGroup({});
  eventName: FormControl = new FormControl('');

  deleteEvent(id: string) {
    this.store.dispatch(EventAction.deleteEvent({ id: id }));
    this.cont = 'Event deleted successfully!';
    this.notificationService.showSuccess(this.success);
    return;
  }

  cont = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

  start: TuiDay | null = null;
  end: TuiDay | null = null;

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize,
    event: any
  ): void {
    this.eventName.setValue(event.data.attributes.name);
    console.log(event);
    this.dialogs
      .open(content, {
        size,
      })
      .subscribe();
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });
  readonly testForm2 = new FormGroup({
    testValue: new FormControl(),
  });

  updateEvent(event: any) {
    let eventToUpdate: any = {
      ...event,
      data: {
        type: 'FP_events',
        id: event.data.id,
        attributes: {
          name: this.eventForm.controls['eventName'].value,
          start_c: this.start!.toString(),
          end_event_c: this.end!.toString(),
          all_day_c: this.stringifyDay(this.controlDay.value),
          act_type_c: this.stringify(this.controlActType.value),
          participant_c: this.stringifyPart(this.controlPart.value),
        },
      },
    };
    console.log(event);
    this.store.dispatch(EventAction.updateEvent({ event: eventToUpdate }));
    this.cont = 'Update event successfully!';
    this.notificationService.showSuccess(this.success);
    return;
  }

  //actType
  controlActType = new FormControl();

  readonly allActType = [
    { name: 'Call' },
    { name: 'Meeting' },
    { name: 'Mobile Call' },
    { name: 'Onisite Meeting' },
    { name: 'Onisite Service' },
    { name: 'Group Event' },
    { name: 'Google Meet' },
    { name: 'Zoom Meet' },
    { name: 'Teams Meeting' },
    { name: 'Webex Meeting' },
    { name: 'Jio Meet' },
  ];

  readonly stringify = (actType: { name: string }): string =>
    `${actType.name} `;
  //control pipe line selection
  readonly controlPipeLines = new FormControl();

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;

  //control status selection
  readonly controlStatuses = new FormControl();

  readonly statuses = [
    { status: 'Cold' },
    { status: 'Warm' },
    { status: 'Hot' },
    { status: 'Inactive' },
  ];

  readonly stringifyStatus = (item: { status: string }): string =>
    `${item.status}`;
  //

  //control status selection
  readonly controlDay = new FormControl();

  readonly days = [{ day: 'Yes' }, { day: 'No' }];

  readonly stringifyDay = (item: { day: string }): string => `${item.day}`;

  readonly controlPart = new FormControl();

  readonly part = [
    { part: 'Sales Group' },
    { part: 'Marketing Group' },
    { part: 'Support Group' },
  ];

  readonly stringifyPart = (item: { part: string }): string => `${item.part}`;
}
