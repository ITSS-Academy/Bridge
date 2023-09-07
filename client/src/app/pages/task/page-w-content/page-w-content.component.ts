import { Component, Inject, Input } from '@angular/core';
import { TaskState } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { TaskAction } from '../ngrx/action/task.action';
import { TaskService } from '../task.service';
import { Store } from '@ngrx/store';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Lead } from 'src/app/models/lead.model';
// import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
})
export class PageWContentComponent {
  @Input()
  tasks!: Observable<any>;


  currentUser!: any;

  constructor(
    public taskService: TaskService,
    private store: Store<{ task: TaskState }>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService
  ) {
    this.tasks = store.select('task');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.exampleForm.addControl('firstName', this.firstName);
    this.exampleForm.addControl('lastName2', this.lastName2);
    this.exampleForm.addControl('company2', this.company2);
    this.exampleForm.addControl('email2', this.email2);
    this.exampleForm.addControl('phone2', this.phone2);
    this.exampleForm.addControl('assignedTo', this.controlAssignments);
  }

  deleteLead(id: string) {
    this.store.dispatch(TaskAction.deleteTask({ id: id }));
  }

  updateLead(task: any) {
    let TaskToUpdate: Lead = {
      data: {
        type: 'Tasks',
        id: '',
        attributes: {
          modified_by_name: '',
          alt_address_city: '',
          birthdate: '',
          created_by_link: '',
          webtolead_invalid_email: '',
          oldcalls: '',
          lead_source: '',
          phone_work: '',
          alt_address_street: '',
          report_to_name: '',
          invalid_email: '0',
          primary_address_city: '',
          email_opt_out: '0',
          account_description: '',
          campaigns: '',
          opportunity_name: '',
          tasks: '',
          portal_name: '',
          lawful_basis: '',
          accept_status_name: '',
          reports_to_id: '',
          opportunity: '',
          modified_user_id: '',
          assigned_user_link: '',
          jjwg_maps_geocode_status_c: '',
          assistant_phone: '',
          meetings: '',
          oldmeetings: '',
          SecurityGroups: '',
          modified_user_link: '',
          m_accept_status_fields: '',
          phone_home: '',
          alt_address_country: '',
          account_name: '',
          email: '',
          website: '',
          phone_fax: '',
          last_name: '',
          photo: '',
          phone_other: '',
          event_status_id: '',
          deleted: '0',
          account_id: '',
          calls: '',
          email_addresses_non_primary: '',
          accounts: '',
          contacts: '',
          notes: '',
          date_reviewed: '',
          primary_address_country: '',
          email2: '',
          email1: '',
          contact: '',
          reports_to_link: '',
          opportunity_amount: '',
          campaign_id: '',
          alt_address_state: '',
          e_invite_status_fields: '',
          status_description: '',
          primary_address_street_3: '',
          primary_address_street_2: '',
          lead_source_description: '',
          primary_address_state: '',
          e_accept_status_fields: '',
          alt_address_postalcode: '',
          opportunity_id: '',
          fp_events_leads_1: '',
          salutation: '',
          assigned_user_name: '',
          portal_app: '',
          description: '',
          event_invite_id: '',
          title: '',
          contact_id: '',
          prospect_lists: '',
          jjwg_maps_address_c: '',
          emails: '',
          campaign_name: '',
          webtolead_email2: '',
          webtolead_email1: '',
          accept_status_id: '',
          event_status_name: '',
          department: '',
          c_accept_status_fields: '',
          first_name: '',
          primary_address_postalcode: '',
          email_addresses: '',
          phone_mobile: '',
          primary_address_street: '',
          assistant: '',
          assigned_user_id: '',
          email_addresses_primary: '',
          reportees: '',
          webtolead_email_opt_out: '',
          alt_address_street_2: '',
          lawful_basis_source: '',
          event_accept_status: '',
          alt_address_street_3: '',
          do_not_call: '0',
          refered_by: '',
          // created_by_name: this.currentUser.data.attributes.full_name,
        },
      },
    };

    // leadToUpdate.data.attributes = lead.data.attributes;
    TaskToUpdate.data.id = task.data.id;
    TaskToUpdate.data.type = task.data.type;
    TaskToUpdate.data.attributes.first_name = task.data.attributes.first_name;
    TaskToUpdate.data.attributes.last_name = task.data.attributes.last_name;
    TaskToUpdate.data.attributes.department = task.data.attributes.department;
    TaskToUpdate.data.attributes.email1 = task.data.attributes.email1;
    TaskToUpdate.data.attributes.phone_mobile = task.data.attributes.phone_mobile;
    TaskToUpdate.data.attributes.assigned_user_name = task.data.attributes.assigned_user_name;
    TaskToUpdate.data.attributes.assigned_user_id = task.data.attributes.assigned_user_id;

    (TaskToUpdate.data.type = 'Leads'),
      (TaskToUpdate.data.attributes.first_name =
        this.exampleForm.controls['firstName'].value),
      (TaskToUpdate.data.attributes.last_name =
        this.exampleForm.controls['lastName2'].value),
      (TaskToUpdate.data.attributes.department =
        this.exampleForm.controls['company2'].value),
      (TaskToUpdate.data.attributes.email1 =
        this.exampleForm.controls['email2'].value),
      (TaskToUpdate.data.attributes.phone_mobile =
        this.exampleForm.controls['phone2'].value),
      (TaskToUpdate.data.attributes.assigned_user_name =
        this.stringifyAssignment(this.controlAssignments.value)),
      (TaskToUpdate.data.attributes.assigned_user_id = this.currentUser.data.id);
    TaskToUpdate.data.attributes.modified_user_id = this.currentUser.data.id;
    TaskToUpdate.data.attributes.modified_by_name =
      this.currentUser.data.attributes.full_name;

    // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    // console.log(leadToUpdate);
    console.log(TaskToUpdate);
    this.store.dispatch(TaskAction.updateTask({ task: TaskToUpdate }));
    this.tasks.subscribe((data) => {
      console.log(data);
    });
    console.log(task);
  }

  exampleForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName2: FormControl = new FormControl('');
  company2: FormControl = new FormControl('');
  email2: FormControl = new FormControl('');
  phone2: FormControl = new FormControl('');

  //control assignment selection
  controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  name = '';
  lastName = '';
  company = '';
  email = '';
  reportTo = '';
  phone = '';

  showDialog(content: PolymorpheusContent, size: TuiDialogSize, task: any): void {
    console.log(task);
    const closeable = this.dialogForm.withPrompt({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs
      .open(content, { closeable, dismissible: closeable, size })
      .subscribe({
        complete: () => {
          this.name = '';
          this.lastName = '';
          this.company = '';
          this.email = '';
          this.reportTo = '';
          this.phone = '';
          this.dialogForm.markAsPristine();
        },
      });
  }
}
  

