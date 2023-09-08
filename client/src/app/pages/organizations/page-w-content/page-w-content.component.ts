import { Observable, map } from 'rxjs';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { OrganizationsService } from '../organizations.service';
import { OrganizationState } from '../ngrx/state/organization.state';
import { Store } from '@ngrx/store';
import { OrganizationAction } from '../ngrx/action/organization.action';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Organization } from 'src/app/models/organization.model';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  organizations!: Observable<any>;
  organization$!: Observable<OrganizationState>;
  currentUser!: any;

  content = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

  // notification = '';
  // status = '';
  // show = false;
  constructor(
    public organizationService: OrganizationsService,
    private store: Store<{ organization: OrganizationState }>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    private nocationService: NotificationService
  ) {
    this.organization$ = store.select('organization');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.exampleForm.addControl('organizationName', this.organizationName);
    this.exampleForm.addControl('website', this.website);
    this.exampleForm.addControl('phone', this.phone);
    this.exampleForm.addControl('controlTypes', this.controlTypes);
    this.exampleForm.addControl('controlAssignments', this.controlAssignments);
    this.exampleForm.addControl('controlStatuses', this.controlStatuses);
  }

  deleteOrganization(id: string) {
    this.store.dispatch(OrganizationAction.deleteOrganization({ id: id }));
    let sub: any = this.organization$.subscribe({
      next: (data) => {
        if (data.status == 'Delete organization success') {
          this.content = 'Delete successfully';
          this.nocationService.showSuccess(this.success);
          return;
        }
      },
      complete: () => sub.unsubscribe(),
    });
  }

  exampleForm: FormGroup = new FormGroup({});
  organizationName: FormControl = new FormControl('');
  website: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  controlTypes = new FormControl();
  controlAssignments = new FormControl();
  controlStatuses = new FormControl();

  async updateOrganization(organization: any) {
    let organizationToUpdate: Organization = {
      data: {
        type: 'Accounts',
        id: '',
        attributes: {
          assigned_to_id_c: '',
          assigned_to_name_c: '',
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
        },
      },
    };
    console.log(organization);
    (organizationToUpdate.data.type = 'Accounts'),
      (organizationToUpdate.data.id = organization.data.id),
      (organizationToUpdate.data.attributes.name =
        this.exampleForm.controls['organizationName'].value),
      (organizationToUpdate.data.attributes.website =
        this.exampleForm.controls['website'].value),
      (organizationToUpdate.data.attributes.phone_office =
        this.exampleForm.controls['phone'].value),
      (organizationToUpdate.data.attributes.account_type = this.stringifyType(
        this.controlTypes.value ?? ''
      )),
      (organizationToUpdate.data.attributes.assigned_to_name_c =
        this.stringifyAssignment(this.controlAssignments.value ?? '')),
      (organizationToUpdate.data.attributes.status_c = this.stringifyStatus(
        this.controlStatuses.value ?? ''
      )),
      (organizationToUpdate.data.attributes.assigned_to_id_c =
        this.currentUser.data.id);
    console.log(organizationToUpdate);
    if (
      organizationToUpdate.data.attributes.name == '' ||
      organizationToUpdate.data.attributes.website == '' ||
      organizationToUpdate.data.attributes.phone_office == '' ||
      organizationToUpdate.data.attributes.account_type == '' ||
      organizationToUpdate.data.attributes.assigned_to_name_c == '' ||
      organizationToUpdate.data.attributes.status_c == ''
    ) {
      this.content = 'Please fill all the fields';
      this.nocationService.showWarning(this.warning);
      return;
    } else if (
      organizationToUpdate.data.attributes.name != '' &&
      organizationToUpdate.data.attributes.website != '' &&
      organizationToUpdate.data.attributes.phone_office != '' &&
      organizationToUpdate.data.attributes.account_type != '' &&
      organizationToUpdate.data.attributes.assigned_to_name_c != '' &&
      organizationToUpdate.data.attributes.status_c != ''
    ) {
      this.content = 'Organization updated successfully';
      this.nocationService.showSuccess(this.success);
      this.store.dispatch(
        OrganizationAction.updateOrganization({
          organization: organizationToUpdate,
        })
      );
    } else {
      this.content = 'Something went wrong';
      this.nocationService.showError(this.error);
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

  showDialog(
    content: PolymorpheusContent,
    size: TuiDialogSize,
    organization: any
  ): void {
    this.phone.setValue(organization.data.attributes.phone_mobile);
    this.organizationName.setValue(organization.data.attributes.name);
    this.website.setValue(organization.data.attributes.website);
    console.log(organization);
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
