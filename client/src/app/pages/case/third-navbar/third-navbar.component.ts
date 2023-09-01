import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThirdNavbarComponent implements OnInit {
  // @Input() pageEmpty:any = null;
  @Output() public addCase = new EventEmitter();

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  caseTitle = '';

  exampleForm = new FormGroup({});
  readonly contactsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', Validators.minLength(12)),
    organizationName: new FormControl(''),
    assignTo: new FormControl(),
    lifeycleStage: new FormControl(),
    status: new FormControl(),
  });

  onModelChangeCaseTitle(caseTitle: string): void {
    this.caseTitle = caseTitle;
    this.dialogForm.markAsDirty();
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

  ngOnInit() {}

  emitAddCase() {
    this.addCase.emit();
  }

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
        complete: () => {},
      });
  }
}
