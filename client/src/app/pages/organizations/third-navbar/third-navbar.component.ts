import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { Organization } from 'src/app/models/organization.model';
import { OrganizationsService } from '../organizations.service';
import { Store } from '@ngrx/store';
import { OrganizationState } from '../ngrx/state/organization.state';
import { Observable } from 'rxjs';
import { OrganizationAction } from '../ngrx/action/organization.action';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThirdNavbarComponent {
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();
  emitAddInfo() {
    this.addInfo.emit();
  }

  content = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

  organization$!: Observable<OrganizationState>;
  currentUser!: any;
  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private organizationService: OrganizationsService,
    public authService: AuthService,
    private store: Store<{ organization: OrganizationState }>,
    private notificationService: NotificationService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.organization$ = store.select('organization');

    this.exampleForm.addControl('organizationName', this.organizationName);
    this.exampleForm.addControl('website', this.website);
    this.exampleForm.addControl('phone', this.phone);
    console.log(this.currentUser);
  }

  //CODE DIALOG
  // exampleForm = new FormGroup({});
  // name='';
  // website='';
  // onModelChangeOrgName(orgName: string): void {
  //   this.name = orgName;
  //   this.dialogForm.markAsDirty();
  // }

  exampleForm: FormGroup = new FormGroup({});
  organizationName: FormControl = new FormControl('');
  website: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  controlTypes = new FormControl()
  controlAssignments = new FormControl();
  controlStatuses = new FormControl();


  async addOrganization() {
    let organization: any = {
      data: {
        type: 'Accounts',
        attributes: {
          name: '',
          website: '',
          phone_office: '',
          account_type: '',
          assigned_user_name: '',
          status_c: '',
          assigned_user_id: '',
          modified_user_id: '',
          modified_by_name: '',
          created_by_name: '',
          jjwg_maps_address_c: '',
          jjwg_maps_geocode_status_c: '',
          jjwg_maps_lat_c: '',
          jjwg_maps_lng_c: '',
          parent_name: '',
          shipping_address_postalcode: '',
          notes: '',
          created_by_link: '',
          billing_address_street_3: '',
          billing_address_street_4: '',
          documents: '',
          shipping_address_state: '',
          billing_address_street_2: '',
          rating: '',
          project: '',
          shipping_address_street_3: '',
          shipping_address_street_2: '',
          shipping_address_street_4: '',
          invalid_email: '',
          email1: '',
          email_opt_out: '',
          
          campaigns: '',
          members: '',
          // member_of: [],
          shipping_address_country: '',
          tasks: '',
          campaign_id: '',
          billing_address_city: '',
          phone_alternate: '',
          created_by: '',
          aos_invoices: '',
          assigned_user_link: '',
          parent_id: '',
          leads: '',
          campaign_accounts: '',
          meetings: '',
          employees: '',
          annual_revenue: '',
          SecurityGroups: '',
          ticker_symbol: '',
          modified_user_link: '',
          description: '',
          
          industry: '',
          prospect_lists: '',
          emails: '',
          bugs: '',
          campaign_name: '',
          billing_address_state: '',
          billing_address_country: '',
          email: '',
          email_addresses: '',
          phone_fax: '',
          cases: '',
          shipping_address_street: '',
          shipping_address_city: '',
          opportunities: '',
          email_addresses_primary: '',
          billing_address_street: '',
          billing_address_postalcode: '',
          sic_code: '',
          aos_contracts: '',
          deleted: 0,
          ownership: '',
          calls: '',
          email_addresses_non_primary: '',
          contacts: '',
          aos_quotes: '',
        }
      },
    };

    (organization.data.type = 'Accounts'),
      (organization.data.attributes.name =
        this.exampleForm.controls['organizationName'].value),
      (organization.data.attributes.website =
        this.exampleForm.controls['website'].value),
      (organization.data.attributes.phone_office =
        this.exampleForm.controls['phone'].value),
      organization.data.attributes.account_type = this.stringifyType(
        this.controlTypes.value ?? ''
      )
      organization.data.attributes.assigned_to_name_c = this.stringifyAssignment(
        this.controlAssignments.value ?? ''
      )
      organization.data.attributes.status_c = this.stringifyStatus(
        this.controlStatuses.value ?? ''
      )
      console.log(organization);

      if(organization.data.attributes.name == '' || organization.data.attributes.website == '' || organization.data.attributes.phone_office == '' || organization.data.attributes.account_type == '' || organization.data.attributes.assigned_to_name_c == '' || organization.data.attributes.status_c == ''){
        this.content = 'Please fill all the fields!';
        this.notificationService.showWarning(this.warning);
        return;
      }else if(organization.data.attributes.name != '' && organization.data.attributes.website != '' && organization.data.attributes.phone_office != '' && organization.data.attributes.account_type != '' && organization.data.attributes.assigned_to_name_c != '' && organization.data.attributes.status_c != ''){
        this.content = 'Organization added successfully!';
        this.notificationService.showSuccess(this.success);
        this.store.dispatch(OrganizationAction.addOrganization({ organization: organization }));
        return;        
      }else{
        this.content = 'Somethings went wrong!';
        this.notificationService.showError(this.error);
        return;
      }
  }




  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;
  //

  //control type selection

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

  //control assignment selection

  readonly assignments = [
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control status selection

  readonly statuses = [
    { status: 'Cold' },
    { status: 'Warm' },
    { status: 'Hot' },
    { status: 'Inactive' },
  ];

  readonly stringifyStatus = (item: { status: string }): string =>
    `${item.status}`;
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

        complete: () => { },
      });
  }
}
