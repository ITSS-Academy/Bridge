import { Component, Inject, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DealState } from '../ngrx/state/deal.state';
import { Store } from '@ngrx/store';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { AuthService } from 'src/app/services/auth.service';
import { DealsService } from '../deals.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { DealAction } from '../ngrx/action/deal.action';
import { NotificationService } from 'src/app/services/notification.service';
import { Deal } from 'src/app/models/deal.model';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  deals$!: Observable<DealState>;


  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private dealService: DealsService,
    public authService: AuthService,
    private store: Store<{ deal: DealState }>,
    private notificationService: NotificationService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.deals$ = store.select('deal');
    this.exampleForm.addControl('dealName', this.dealName);
    this.exampleForm.addControl('amount2', this.amount2);
    this.exampleForm.addControl('probability2', this.probability2);

    console.log(this.currentUser);
  }

  exampleForm: FormGroup = new FormGroup({});
  dealName: FormControl = new FormControl('');
  amount2: FormControl = new FormControl('');
  probability2: FormControl = new FormControl('');

  exampleFormSub = new FormGroup({});

  date: TuiDay | null = null;
  deleteDeal(id: string) {
    this.store.dispatch(DealAction.deleteDeal({ id: id }));
    this.cont = 'Delete deal successfully!';
    this.notificationService.showSuccess(this.success);
    return;
  }

  updateDeal(deal: any) {
    let subDeal: Deal ={...deal, data: {
        type: 'Opportunity',
        id: deal.data.id,
        attributes: {
          name: this.exampleForm.controls['dealName'].value,
          amount_deal_c: this.exampleForm.controls['amount2'].value,
          assigned_to_name_c: this.stringifyAssignment(this.controlAssignments.value),
          close_date_c: this.date!.toString(),
          lead_src_c: this.stringifySource(this.controlSources.value),
          org_name_c: this.stringifyOrg(this.controlOrgs.value),
          pipe_line_c: this.stringifyPipeLine(this.controlPipeLines.value),
          probability_deal_c: this.exampleForm.controls['probability2'].value, 
          stage_c: this.stringifyStage(this.controlStages.value),
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
      this.store.dispatch(DealAction.addDeal({ deal: deal }));
      this.cont = 'Add deal successfully!';
      this.notificationService.showSuccess(this.success);
      return;
  }


  readonly testForm = new FormGroup({
    testValue: new FormControl()
  });

  cont = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

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

  name = '';
  probability = '';
  amount = '';

  nameOrg = '';
  website = '';

  //control pipe line selection
  readonly controlPipeLines = new FormControl();

  readonly pipeLines = [{ pipeLine: 'Standard' }];

  readonly stringifyPipeLine = (item: { pipeLine: string }): string =>
    `${item.pipeLine}`;
  //

  //control stage selection
  readonly controlStages = new FormControl();

  readonly stages = [
    { stage: 'New' },
    { stage: 'Qualifying' },
    { stage: 'Requirements Gathering' },
    { stage: 'Value Proposition' },
    { stage: 'Negotiation' },
    { stage: 'Ready To cLose' },
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


   //Open Dialog
   showDialog(content: PolymorpheusContent, size: TuiDialogSize, deal:any): void {
    this.dealName.setValue(deal.data.attributes.name);
    this.amount2.setValue(deal.data.attributes.amount_deal_c);
    this.probability2.setValue(deal.data.attributes.probability_deal_c);
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
          this.dialogForm.markAsPristine();
        },
      });
  }
}
