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
import { DealsService } from '../deals.service';
import { AuthService } from 'src/app/services/auth.service';
import { DealState } from '../ngrx/state/deal.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Deal } from 'src/app/models/deal.model';
import { DealAction } from '../ngrx/action/deal.action';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdNavbarComponent {
  @Input() title!: string;
  currentUser!: any;
  deal$!: Observable<DealState>;
  dealsForm: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private dealService: DealsService,
    public authService: AuthService,
    private store: Store<{ deal: DealState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.deal$ = store.select('deal');
    this.exampleForm.addControl('dealName', this.dealName);
    this.exampleForm.addControl('amount2', this.amount2);
    this.exampleForm.addControl('probability ', this.probability2);

    console.log(this.currentUser);
  }

  //CODE DIALOG
  name = '';
  probability = '';
  amount = '';

  nameOrg = '';
  website = '';

  ngOnInit() {}

  exampleForm: FormGroup = new FormGroup({});
  dealName: FormControl = new FormControl('');
  amount2: FormControl = new FormControl('');
  probability2: FormControl = new FormControl('');

  exampleFormSub = new FormGroup({});

  async addDeal() {
    let subDeal: any = {
      data: {
        type: 'Opportunity',
      },
    };
    let deal: Deal = {
      data: {
        type: 'Opportunities',
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
          opportunity_type: '',
          account_name: '',
          account_id: '',
          campaign_id: '',
          campaign_name: '',
          campaign_opportunities: '',
          lead_source: '',
          amount: '',
          amount_usdollar: '',
          currency_id: '',
          currency_name: '',
          currency_symbol: '',
          probability: '',
          accounts: '',
          contacts: '',
          tasks: '',
          notes: '',
          meetings: '',
          calls: '',
          emails: '',
          documents: '',
          project: '',
          leads: '',
          campaigns: '',
          campaign_link: '',
          currencies: '',
          aos_quotes: '',
          aos_contracts: '',
          date_closed: '',
          next_step: '',
          sales_stage: '',
        },
      },
    };
    (deal.data.type = 'Opportunities'),
      (deal.data.attributes.name = this.dealsForm.controls['dealName'].value),
      (deal.data.attributes.amount = this.dealsForm.controls['amount2'].value),
      (deal.data.attributes.probability =
        this.dealsForm.controls['probablity2'].value),
      (deal.data.attributes.campaign_name = this.stringifyOrg(
        this.controlOrgs.value
      )),
      (deal.data.attributes.campaign_link = this.stringifyPipeLine(
        this.controlPipeLines.value
      )),
      (deal.data.attributes.sales_stage = this.stringifyStage(
        this.controlStages.value
      )),
      (deal.data.attributes.assigned_user_name = this.stringifyAssignment(
        this.controlAssignments.value
      )),
      (deal.data.attributes.lead_source = this.stringifySource(
        this.controlSources.value
      )),
      (deal.data.attributes.assigned_user_id = this.currentUser.data.id);
    deal.data.attributes.modified_user_id = this.currentUser.data.id;
    deal.data.attributes.modified_by_name =
      this.currentUser.data.attributes.full_name;
    // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    console.log(deal);
    this.store.dispatch(DealAction.addDeal({ deal: deal }));
    this.deal$.subscribe((data) => {
      console.log(data);
    });
  }

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
          this.name = '';
          this.probability = '';
          this.amount = '';
          this.nameOrg = '';
          this.website = '';
        },
      });
  }
}
