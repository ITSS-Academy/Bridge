import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  ViewChild,
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
import { CasesService } from '../case.service';
import { AuthService } from 'src/app/services/auth.service';
import { CaseState } from '../ngrx/state/case.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Case } from 'src/app/models/case.model';
import { CaseAction } from '../ngrx/action/case.action';
import { TuiDay } from '@taiga-ui/cdk';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  case$!: Observable<CaseState>;
  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private caseService: CasesService,
    public authService: AuthService,
    private store: Store<{ case: CaseState }>,
    private notificationService: NotificationService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.case$ = store.select('case');
    this.casesForm.addControl('caseTitle', this.caseTitle);
    this.casesForm.addControl('orgName', this.orgName);

    console.log(this.currentUser);
  }

  caseTitle2 = '';
  orgName2 = '';

  casesForm: FormGroup = new FormGroup({});
  contactsForm: FormGroup = new FormGroup({});
  caseTitle: FormControl = new FormControl('');
  orgName: FormControl = new FormControl('');
  date: TuiDay | null = null;

  onModelChangeCaseTitle(caseTitle: string): void {
    this.caseTitle2 = caseTitle;
    this.dialogForm.markAsDirty();
  }

  deleteCase(id: string) {
    this.store.dispatch(CaseAction.deleteCase({ id: id }));
  }

  updateCase(Case: any){
    let CaseToUpdate: any = {...Case, data: {
      id: Case.data.id,
      type: 'Cases',
      attributes: {
          assigned_to_name_c: this.stringifyAssignment(this.controlAssignments.value),
          contact_c: this.stringifyContact(this.controlContacts.value),
          resolute_date_c: this.date!.toString(),
          group_case_c: this.stringifyGroup(this.controlGroups.value),
          status_case_c: this.stringifyStatus(this.controlStatuses.value),
          priority_case_c: this.stringifyPriority(this.controlPriorities.value),
          org_name_c: this.casesForm.controls['orgName'].value,
          name: this.casesForm.controls['caseTitle'].value,
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
      }
    }}
    this.store.dispatch(CaseAction.updateCase({Case: CaseToUpdate}));
    this.cont = 'Update case successfully!';
    this.notificationService.showSuccess(this.success);
  }


  cont = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;
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

  readonly testForm = new FormGroup({
    testValue: new FormControl()
  });

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

  //Hiển thị Dialog
  showDialog(content: PolymorpheusContent, size: TuiDialogSize, Case:any): void {
    console.log(Case);
    this.caseTitle.setValue(Case.data.attributes.name);
    this.orgName.setValue(Case.data.attributes.org_name_c);
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
          this.caseTitle2 = '';
          this.orgName2 = '';
        },
      });
  }
}
