import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { Observable } from 'rxjs';
import { CasesService } from '../case.service';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { Case } from 'src/app/models/case.model';
import { CaseAction } from '../ngrx/action/case.action';
import { CaseState } from '../ngrx/state/case.state';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss', './third-navbar.component.less'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdNavbarComponent implements OnInit {
  @Input() title!: string;
  currentUser!: any;
  case$!: Observable<CaseState>;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private caseService: CasesService,
    public authService: AuthService,
    private store: Store<{ case: CaseState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.case$ = store.select('case');
    this.casesForm.addControl('caseTitle', this.caseTitle);
    this.casesForm.addControl('organizationName', this.orgName);

    console.log(this.currentUser);
  }

  casesForm: FormGroup = new FormGroup({});
  contactsForm: FormGroup = new FormGroup({});
  caseTitle: FormControl = new FormControl('');
  orgName: FormControl = new FormControl('');


  async addCase() {
    let subCase: any = {
      data: {
        type: 'Case',
      },
    };
    let caseToAdd: Case = {
      data: {
        type: 'Cases',
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
          case_number: '',
          type: '',
          status: '',
          priority: '',
          resolution: '',
          work_log: '',
          suggestion_box: '',
          account_name: '',
          account_name1: '',
          account_id: '',
          state: '',
          case_attachments_display: '',
          case_update_form: '',
          contact_created_by: '',
          contact_created_by_name: '',
          contact_created_by_id: '',
          tasks: '',
          notes: '',
          meetings: '',
          emails: '',
          documents: '',
          calls: '',
          bugs: '',
          contacts: '',
          accounts: '',
          project: '',
          update_text: '',
          internal: '',
          aop_case_updates_threaded: '',
          aop_case_updates: '',
          aop_case_events: '',
        },
      },
    };
    (caseToAdd.data.type = 'Cases'),
      (caseToAdd.data.attributes.name =
        this.contactsForm.controls['caseTitle'].value),
      (caseToAdd.data.attributes.account_name =
        this.contactsForm.controls['orgName'].value),
      (caseToAdd.data.attributes.status = this.stringifyStatus(
        this.controlStatuses.value
      )),
      (caseToAdd.data.attributes.priority = this.stringifyPriority(
        this.controlPriorities.value
      )),
      (caseToAdd.data.attributes.contacts = this.stringifyContact(
        this.controlContacts.value
      )),
      (caseToAdd.data.attributes.internal = this.stringifyContact(
        this.controlGroups.value
      )),
      (caseToAdd.data.attributes.assigned_user_name = this.stringifyAssignment(
        this.controlAssignments.value
      )),
      (caseToAdd.data.attributes.assigned_user_id = this.currentUser.data.id);
    caseToAdd.data.attributes.modified_user_id = this.currentUser.data.id;
    caseToAdd.data.attributes.modified_by_name =
      this.currentUser.data.attributes.full_name;
    // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    console.log(caseToAdd);
    this.store.dispatch(CaseAction.addCase({ case: caseToAdd }));
    this.case$.subscribe((data) => {
      console.log(data);
    });
  }

  //control status selection
  readonly controlStatuses = new FormControl();

  readonly statuses = [
    { status: 'New' },
    { status: 'Assigned' },
    { status: 'Open' },
    { status: 'Wait for customer' },
    { status: 'Wait for 3rd party' },
    { status: 'Resolved' },
    { status: 'Closed' },
  ];

  readonly stringifyStatus = (item: { status: string }): string =>
    `${item.status}`;
  //

  //control priority selection
  readonly controlPriorities = new FormControl();

  readonly priorities = [
    { priority: 'Urgent' },
    { priority: 'High' },
    { priority: 'Medium' },
    { priority: 'Low' },
  ];

  readonly stringifyPriority = (item: { priority: string }): string =>
    `${item.priority}`;
  //

  //control contact selection
  readonly controlContacts = new FormControl();

  readonly contacts = [
    { contact: 'Khoa' },
    { contact: 'Trí' },
    { contact: 'Việt' },
    { contact: 'Quân' },
  ];

  readonly stringifyContact = (item: { contact: string }): string =>
    `${item.contact}`;
  //

  //control contact selection
  readonly controlGroups = new FormControl();

  readonly groups = [
    { group: 'Team Selling' },
    { group: 'Marketing Group' },
    { group: 'Support Group' },
  ];

  readonly stringifyGroup = (item: { group: string }): string =>
    `${item.group}`;
  //

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Minh Quân' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //phone
  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;
  //

  // seclect lifeCycleStage
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

  // seclect status contact
  readonly allStatus = [
    { name: 'Cold' },
    { name: 'Warm' },
    { name: 'Hot' },
    { name: 'NlWC' },
    { name: 'Inactive' },
  ];

  readonly stringifyStatusContact = (statusContact: { name: string }): string =>
    `${statusContact.name} `;
  //

  ngOnInit() {}

  //Hiển thị Dialog
  showDialog(content: PolymorpheusContent, size: TuiDialogSize): void {
    const closeable = this.dialogForm.withPrompt({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs
      .open(content, { closeable, dismissible: closeable, size: size })
      .subscribe({
        complete: () => {
          this;
        },
      });
  }
}
