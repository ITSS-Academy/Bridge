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
import { CasesService } from '../case.service';
import { AuthService } from 'src/app/services/auth.service';
import { CaseState } from '../ngrx/state/case.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Case } from 'src/app/models/case.model';
import { CaseAction } from '../ngrx/action/case.action';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  cases!: Observable<any>;
  case$!: Observable<CaseState>;
  currentUser!: any;

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

  caseTitle2 = '';
  orgName2 = '';

  casesForm: FormGroup = new FormGroup({});
  contactsForm: FormGroup = new FormGroup({});
  caseTitle: FormControl = new FormControl('');
  orgName: FormControl = new FormControl('');

  onModelChangeCaseTitle(caseTitle: string): void {
    this.caseTitle2 = caseTitle;
    this.dialogForm.markAsDirty();
  }

  deleteCase(id: string) {
    this.store.dispatch(CaseAction.deleteCase({ id: id }));
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

  //Hiển thị Dialog
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
          this.caseTitle2 = '';
          this.orgName2 = '';
        },
      });
  }
}
