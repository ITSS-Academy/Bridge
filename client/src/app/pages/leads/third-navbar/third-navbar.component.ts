import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnInit,
  Input,
} from '@angular/core';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { Lead } from 'src/app/models/lead.model';
import { LeadsService } from '../leads.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LeadState } from '../ngrx/state/lead.state';
import { Observable } from 'rxjs';
import { LeadAction } from '../ngrx/action/lead.action';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
})
export class ThirdNavbarComponent implements OnInit {
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();

  lead$!: Observable<LeadState>;
  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private leadService: LeadsService,
    public authService: AuthService,
    private store: Store<{ lead: LeadState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.lead$ = store.select('lead');

    this.exampleForm.addControl('firstName', this.firstName);
    this.exampleForm.addControl('lastName2', this.lastName2);
    this.exampleForm.addControl('company2', this.company2);
    this.exampleForm.addControl('email2', this.email2);
    this.exampleForm.addControl('phone2', this.phone2);
    console.log(this.currentUser);
    // this.exampleForm.addControl('assignedTo', this.controlAssignments);
  }

  ngOnInit() {}

  emitAddInfo() {
    this.addInfo.emit();
  }

  //CODE DIALOG
  // exampleForm = new FormGroup({});
  exampleForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName2: FormControl = new FormControl('');
  company2: FormControl = new FormControl('');
  email2: FormControl = new FormControl('');
  phone2: FormControl = new FormControl('');
  // assignedTo: FormControl = new FormControl('');

  async addLead() {
    let subLead: any = {
      data: {
        type: 'Lead',
      },
    };
    let lead: any = {
      data: {
        type: 'Leads',
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
          do_not_call: '',
          refered_by: '',
          // created_by_name: this.currentUser.data.attributes.full_name,
        },
      },
    };
    (lead.data.type = 'Leads'),
      (lead.data.attributes.first_name =
        this.exampleForm.controls['firstName'].value),
      (lead.data.attributes.last_name =
        this.exampleForm.controls['lastName2'].value),
      (lead.data.attributes.department =
        this.exampleForm.controls['company2'].value),
      (lead.data.attributes.email1 = this.exampleForm.controls['email2'].value),
      (lead.data.attributes.phone_mobile =
        this.exampleForm.controls['phone2'].value),
      (lead.data.attributes.assigned_user_name = this.stringifyAssignment(
        this.controlAssignments.value
      )),
      (lead.data.attributes.assigned_user_id = this.currentUser.data.id);
      lead.data.attributes.modified_user_id = this.currentUser.data.id;
      lead.data.attributes.modified_by_name = this.currentUser.data.attributes.full_name;
      // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    console.log(lead);
    this.store.dispatch(LeadAction.addLead({ lead: lead }));
    this.lead$.subscribe((data) => {
      console.log(data);
    });
  }

  name = '';
  lastName = '';
  company = '';
  email = '';
  reportTo = '';
  phone = '';

  onModelChangeName(name: string): void {
    this.name = name;
    this.dialogForm.markAsDirty();
  }

  onModelChangeLastName(lastName: string): void {
    this.lastName = lastName;
    this.dialogForm.markAsDirty();
  }

  onModelChangeEmail(email: string): void {
    this.email = email;
    this.dialogForm.markAsDirty();
  }

  onModelChangeCompany(company: string): void {
    this.company = company;
    this.dialogForm.markAsDirty();
  }

  onModelChangeReport(report: string): void {
    this.reportTo = report;
    this.dialogForm.markAsDirty();
  }

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
  //

  showDialog(content: PolymorpheusContent, size: TuiDialogSize): void {
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
