import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { EventAction } from '../../ngrx/action/event.action';
import { Store } from '@ngrx/store';
import { EventState } from '../../ngrx/state/event.state';
import { Observable } from 'rxjs';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { EventsService } from '../../events.service';
import { AuthService } from 'src/app/services/auth.service';
import { act } from '@ngrx/effects';

@Component({
  selector: 'app-navbar-events',
  templateUrl: './navbar-events.component.html',
  styleUrls: ['./navbar-events.component.scss']
})
export class NavbarEventsComponent {

   event$!: Observable<EventState>;
  currentUser!: any;
  eventName: string = '';
  constructor(
  @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
  private eventService: EventsService,
  public authService: AuthService,
  private store: Store<{ event: EventState }>) { 
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.event$ = store.select('event');

    this.eventForm.addControl('eventName', new FormControl(''));
    this.eventForm.addControl('startTime', new FormControl(''));
    this.eventForm.addControl('endTime', new FormControl(''));
    this.eventForm.addControl('actType', new FormControl());
    this.eventForm.addControl('agenda', new FormControl());
    this.eventForm.addControl('part', new FormControl(''));
    console.log(this.currentUser);

  }

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        size,
      })
      .subscribe();
  }

   eventForm = new FormGroup({
    eventName: new FormControl(''),
    startTime: new FormControl(),
    endTime: new FormControl(),
    actType: new FormControl(),
    agenda: new FormControl(),
    part: new FormControl(''),
  });


  // eventForm: FormGroup = new FormGroup({});
  // eventName: FormControl= new FormControl('');
  // startTime  = new FormControl('');
  // endTime = new FormControl('');
  // actType = new FormControl()
  // agenda: FormControl = new FormControl('');
  // part = new FormControl();



  // seclect actType
  

  async addEvent() {
    let event: any = {
      data: {
        type: 'FP_events',
        attributes: {
      SecurityGroups: '',
      created_by_link: '',
      assigned_user_name: '',
      activity_status_type: '',
      modified_user_link: '',
      fp_event_locations_fp_events_1_name: '',
      link: '',
      description: '',
      fp_events_prospects_1: '',
      created_by_name: '',
      link_declined: '',
      fp_event_locations_fp_events_1: '',
      duration: '',
      decline_redirect: '',
      accept_redirect: '',
      fp_events_contacts: '',
      date_entered: '',
      duration_hours: 0,
      budget: '',
      fp_event_locations_fp_events_1fp_event_locations_ida: '',
      modified_user_id: 1,
      date_end: '',
      assigned_user_id: '',
      created_by: 1,
      invite_templates: '',
      date_start: '',
      deleted: 0,
      date_modified: '',
      assigned_user_link: '',
      duration_minutes: '',
      name: '',
      modified_by_name: '',
      fp_events_leads_1: '',
      currency_id: '',
        }
      },
    };

    (event.data.type = 'FP_events'),
      (event.data.attributes.name =
        this.eventForm.controls['eventName'].value),
      // (event.data.attributes.date_start =
      //   this.eventForm.controls['startTime'].value),
      // (event.data.attributes.date_end =
      //   this.eventForm.controls['endTime'].value),
      (event.data.attributes.description = this.eventForm.controls['agenda'].value),
      
      // (event.data.attributes.activity_status_type = this.eventForm.controls['actType'].value),
      (event.data.attributes.assigned_user_name = this.eventForm.controls['part'].value),
      
      // (event.data.activity_status_type = this.stringify(
      //   this.eventForm.controls['actType'].value
      // )),
      // (event.data.attributes.assigned_user_name = this.eventForm.controls['part'].value),

      console.log(event);
    this.store.dispatch(EventAction.addEvent({ event: event }));
    const subcription:any = this.event$.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => subcription.unsubscribe()
    })
  }



  //actType

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


  // select part
   allPart = [
    ['TriNguyen', 'KhoaBui', 'DuongLe', 'VietVo', 'QuanTran'],
    ['Team Selling', 'Marketing Group', 'Support Group'],
  ];

  labels = ['User', 'Group'];
}
