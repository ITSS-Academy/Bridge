import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { ContactsService } from '../../contact.service';
import { AuthService } from 'src/app/services/auth.service';
import { ContactState } from '../ngrx/state/contact.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactAction } from '../ngrx/action/contact.action';

@Component({
  selector: 'app-navbar-contacts',
  templateUrl: './navbar-contacts.component.html',
  styleUrls: [
    './navbar-contacts.component.scss',
    './navbar-contacts.component.less',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogFormService],
})
export class NavbarContactsComponent {
  @Input() title!: string;
  currentUser!: any;
  contact$!: Observable<ContactState>;

  firstName2 = '';
  lastName2 = '';
  email2 = '';
  orgName2 = '';

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private contactService: ContactsService,
    public authService: AuthService,
    private store: Store<{ contact: ContactState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.contact$ = store.select('contact');
    this.contactsForm.addControl('firstName', this.firstName);
    this.contactsForm.addControl('lastName', this.lastName);
    this.contactsForm.addControl('email', this.email);
    this.contactsForm.addControl('phone', this.phone);
    this.contactsForm.addControl('organizationName', this.organizationName);

    console.log(this.currentUser);
  }

  //CODE DIALOG
  // exampleForm = new FormGroup({});
  contactsForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  organizationName: FormControl = new FormControl('');
  // assignTo: new FormControl(),
  // lifeycleStage: new FormControl(),
  // status: new FormControl(),

  async addContact() {
    let subContact: any = {
      data: {
        type: 'Contact',
      },
    };
    let contact: Contact = {
      data: {
        type: 'Contacts',
        attributes: {
          name: '',
          modified_user_id: '',
          modified_by_name: '',
          created_by: '',
          created_by_name: '',
          description: '',
          deleted: '',
          created_by_link: '',
          modified_user_link: '',
          assigned_user_id: '',
          assigned_user_name: '',
          assigned_user_link: '',
          SecurityGroups: '',
          salutation: '',
          first_name: '',
          last_name: '',
          full_name: '',
          title: '',
          photo: '',
          department: '',
          do_not_call: '',
          phone_home: '',
          email: '',
          phone_mobile: '',
          phone_work: '',
          phone_other: '',
          phone_fax: '',
          email1: '',
          email2: '',
          invalid_email: '',
          email_opt_out: '',
          lawful_basis: '',
          date_reviewed: '',
          lawful_basis_source: '',
          primary_address_street: '',
          primary_address_street_2: '',
          primary_address_street_3: '',
          primary_address_city: '',
          primary_address_state: '',
          primary_address_postalcode: '',
          primary_address_country: '',
          alt_address_street: '',
          alt_address_street_2: '',
          alt_address_street_3: '',
          alt_address_city: '',
          alt_address_state: '',
          alt_address_postalcode: '',
          alt_address_country: '',
          assistant: '',
          assistant_phone: '',
          email_addresses_primary: '',
          email_addresses: '',
          email_addresses_non_primary: '',
          email_and_name1: '',
          lead_source: '',
          account_name: '',
          account_id: '',
          opportunity_role_fields: '',
          opportunity_role_id: '',
          opportunity_role: '',
          reports_to_id: '',
          report_to_name: '',
          birthdate: '',
          accounts: '',
          reports_to_link: '',
          opportunities: '',
          bugs: '',
          calls: '',
          cases: '',
          direct_reports: '',
          emails: '',
          documents: '',
          leads: '',
          meetings: '',
          notes: '',
          project: '',
          project_resource: '',
          am_projecttemplates_resources: '',
          am_projecttemplates_contacts_1: '',
          tasks: '',
          tasks_parent: '',
          notes_parent: '',
          user_sync: '',
          campaign_id: '',
          campaign_name: '',
          campaigns: '',
          campaign_contacts: '',
          c_accept_status_fields: '',
          m_accept_status_fields: '',
          accept_status_id: '',
          accept_status_name: '',
          prospect_lists: '',
          sync_contact: '',
          fp_events_contacts: '',
          aos_quotes: '',
          aos_invoices: '',
          aos_contracts: '',
          e_invite_status_fields: '',
          event_status_name: '',
          event_invite_id: '',
          e_accept_status_fields: '',
          event_accept_status: '',
          event_status_id: '',
          project_contacts_1: '',
          aop_case_updates: '',
          joomla_account_id: '',
          portal_account_disabled: '',
          joomla_account_access: '',
          portal_user_type: '',
        },
      },
    };
    (contact.data.type = 'Contacts'),
      (contact.data.attributes.first_name =
        this.contactsForm.controls['firstName'].value),
      (contact.data.attributes.last_name =
        this.contactsForm.controls['lastName'].value),
      (contact.data.attributes.email1 =
        this.contactsForm.controls['email'].value),
      (contact.data.attributes.phone_mobile =
        this.contactsForm.controls['phone'].value),
      (contact.data.attributes.department =
        this.contactsForm.controls['organizationName'].value),
      (contact.data.attributes.assigned_user_name = this.stringifyAssignment(
        this.controlAssignments.value
      )),
      (contact.data.attributes.title = this.stringifyLife(
        this.controlLife.value
      )),
      (contact.data.attributes.event_status_name = this.stringifyStatus(
        this.controlStatus.value
      )),
      (contact.data.attributes.assigned_user_id = this.currentUser.data.id);
    contact.data.attributes.modified_user_id = this.currentUser.data.id;
    contact.data.attributes.modified_by_name =
      this.currentUser.data.attributes.full_name;
    // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    console.log(contact);
    this.store.dispatch(ContactAction.addContact({ contact: contact }));
    this.contact$.subscribe((data) => {
      console.log(data);
    });
  }

  //phone
  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  // seclect status
  readonly controlStatus = new FormControl();

  readonly allStatus = [
    { name: 'Cold' },
    { name: 'Warm' },
    { name: 'Hot' },
    { name: 'NlWC' },
    { name: 'Inactive' },
  ];

  readonly stringifyStatus = (status: { name: string }): string =>
    `${status.name} `;

  // seclect lifeCycleStage
  readonly controlLife = new FormControl();

  readonly allLife = [
    { name: 'Lead' },
    { name: 'Marketing Qualified Lead' },
    { name: 'Sales Qualified Lead' },
    { name: 'Customer' },
    { name: 'Competitor' },
    { name: 'Partner' },
    { name: 'Analyst' },
    { name: 'Vendor' },
    { name: 'Other' },
    { name: 'Anonymus' },
  ];

  readonly stringifyLife = (life: { name: string }): string => `${life.name} `;
  //

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //Open Dialog
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
          this.firstName2 = '';
          this.lastName2 = '';
          this.email2 = '';
          this.orgName2 = '';
          this.dialogForm.markAsPristine();
        },
      });
  }
}
