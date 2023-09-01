import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-page-empty',
  templateUrl: './page-empty.component.html',
  styleUrls: ['./page-empty.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageEmptyComponent implements OnInit {
  @Output() public addDeal = new EventEmitter();

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  name = '';
  probability = '';
  amount = '';

  nameOrg = '';
  website = '';

  ngOnInit() {}

  exampleForm = new FormGroup({});
  exampleFormSub = new FormGroup({});

  onModelChangeName(name: string): void {
    this.name = name;
    this.dialogForm.markAsDirty();
  }

  onModelChangeProbability(prob: string): void {
    this.probability = prob;
    this.dialogForm.markAsDirty();
  }

  onModelChangeOrgName(orgName: string): void {
    this.name = orgName;
    this.dialogForm.markAsDirty();
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });

  //control pipe line selection
  readonly controlPipeLines = new FormControl();

  readonly pipeLines = [{ pipeLine: 'Khoa Bùi' }];

  readonly stringifyPipeLine = (item: { pipeLine: string }): string =>
    `${item.pipeLine}`;
  //

  //control stage selection
  readonly controlStages = new FormControl();

  readonly stages = [
    { stage: 'New' },
    { stage: 'Qualìying' },
    { stage: 'Requirements Gathering' },
    { stage: 'Value Proposition' },
    { stage: 'Negotiation' },
    { stage: 'Ready To CLose' },
    { stage: 'Closed Won' },
    { stage: 'Closed Lost' },
    { stage: 'Dormant' },
  ];

  readonly stringifyStage = (item: { stage: string }): string =>
    `${item.stage}`;
  //

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control lead source selection
  readonly controlSources = new FormControl();

  readonly sources = [
    { source: 'Cold Call' },
    { source: 'Referral' },
    { source: 'Word of mouth' },
    { source: 'Web Site' },
    { source: 'Trade Show' },
    { source: 'Conference' },
    { source: 'Direct Mail' },
    { source: 'Public Relations' },
    { source: 'Partner' },
    { source: 'Employee' },
    { source: 'Self Generated' },
    { source: 'Word of mouth' },
    { source: 'Existing Customer' },
    { source: 'Facebook' },
    { source: 'Twitter' },
    { source: 'Mail Manager' },
    { source: 'Mail Converter' },
  ];

  readonly stringifySource = (item: { source: string }): string =>
    `${item.source}`;
  //

  //control amount selection
  readonly controlAmounts = new FormControl();

  readonly amounts = [{ amount: 'VND-đ' }, { amount: 'USD-$' }];

  readonly stringifyAmount = (item: { amount: string }): string =>
    `${item.amount}`;
  //

  //control org name selection
  readonly controlOrgs = new FormControl();

  readonly orgs = [{ org: 'Công ty TNHH Đào tạo ITSS' }];

  readonly stringifyOrg = (item: { org: string }): string => `${item.org}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;
  //

  //control type selection
  readonly controlTypes = new FormControl();

  readonly types = [
    { type: 'Lead' },
    { type: 'Sales Qualified Lead' },
    { type: 'Customer' },
    { type: 'Cpmpetitor' },
    { type: 'Partner' },
    { type: 'Analyst' },
    { type: 'Vendor' },
  ];

  readonly stringifyType = (item: { type: string }): string => `${item.type}`;
  //

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

  emitAddDeal() {
    this.addDeal.emit();
  }

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
