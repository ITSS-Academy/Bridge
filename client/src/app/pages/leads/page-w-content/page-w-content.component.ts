import { Observable, map } from 'rxjs';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { LeadsService } from '../leads.service';
import { LeadState } from '../ngrx/state/lead.state';
import { Store } from '@ngrx/store';
import { LeadAction } from '../ngrx/action/lead.action';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Lead } from 'src/app/models/lead.model';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  // leads!: Observable<any>;
  lead$!: Observable<LeadState>;

  currentUser!: any;

  content = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

  constructor(
    public leadService: LeadsService,
    private store: Store<{ lead: LeadState }>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    private notificationService: NotificationService
  ) {
    this.lead$ = store.select('lead');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.exampleForm.addControl('firstName', this.firstName);
    this.exampleForm.addControl('lastName2', this.lastName2);
    this.exampleForm.addControl('company2', this.company2);
    this.exampleForm.addControl('email2', this.email2);
    this.exampleForm.addControl('phone2', this.phone2);
    this.exampleForm.addControl('assignedTo', this.controlAssignments);
  }

  deleteLead(id: string) {
    this.store.dispatch(LeadAction.deleteLead({ id: id }));
    this.lead$.subscribe((data) => {
      if (data.status == 'Delete lead success') {
        this.content = 'Delete lead success';
        this.notificationService.showSuccess(this.success);
      }
    });
  }

  updateLead(lead: any) {
    let leadToUpdate: Lead = {
      data: {
        type: 'Leads',
        id: '',
        attributes: {
          assigned_to_id_c: '',
          assigned_to_name_c: '',
          email_c: '',
          modified_by_name: '',
          alt_address_city: '',
          birthdate: '',
          created_by_link: '',
          webtolead_invalid_email: '',
          oldcalls: '',
          lead_source: '',
          phone_work: '',
          alt_address_street: '',
          report_to_name: '',
          invalid_email: '0',
          primary_address_city: '',
          email_opt_out: '0',
          account_description: '',
          campaigns: '',
          opportunity_name: '',
          tasks: '',
          portal_name: '',
          lawful_basis: '',
          accept_status_name: '',
          reports_to_id: '',
          opportunity: '',
          modified_user_id: '',
          assigned_user_link: '',
          jjwg_maps_geocode_status_c: '',
          assistant_phone: '',
          meetings: '',
          oldmeetings: '',
          SecurityGroups: '',
          modified_user_link: '',
          m_accept_status_fields: '',
          phone_home: '',
          alt_address_country: '',
          account_name: '',
          email: '',
          website: '',
          phone_fax: '',
          last_name: '',
          photo: '',
          phone_other: '',
          event_status_id: '',
          deleted: '0',
          account_id: '',
          calls: '',
          email_addresses_non_primary: '',
          accounts: '',
          contacts: '',
          notes: '',
          date_reviewed: '',
          primary_address_country: '',
          email2: '',
          email1: '',
          contact: '',
          reports_to_link: '',
          opportunity_amount: '',
          campaign_id: '',
          alt_address_state: '',
          e_invite_status_fields: '',
          status_description: '',
          primary_address_street_3: '',
          primary_address_street_2: '',
          lead_source_description: '',
          primary_address_state: '',
          e_accept_status_fields: '',
          alt_address_postalcode: '',
          opportunity_id: '',
          fp_events_leads_1: '',
          salutation: '',
          assigned_user_name: '',
          portal_app: '',
          description: '',
          event_invite_id: '',
          title: '',
          contact_id: '',
          prospect_lists: '',
          jjwg_maps_address_c: '',
          emails: '',
          campaign_name: '',
          webtolead_email2: '',
          webtolead_email1: '',
          accept_status_id: '',
          event_status_name: '',
          department: '',
          c_accept_status_fields: '',
          first_name: '',
          primary_address_postalcode: '',
          email_addresses: '',
          phone_mobile: '',
          primary_address_street: '',
          assistant: '',
          assigned_user_id: '',
          email_addresses_primary: '',
          reportees: '',
          webtolead_email_opt_out: '',
          alt_address_street_2: '',
          lawful_basis_source: '',
          event_accept_status: '',
          alt_address_street_3: '',
          do_not_call: '0',
          refered_by: '',
          // created_by_name: this.currentUser.data.attributes.full_name,
        },
      },
    };

    // leadToUpdate.data.attributes = lead.data.attributes;
    leadToUpdate.data.id = lead.data.id;
    leadToUpdate.data.type = lead.data.type;
    leadToUpdate.data.attributes.first_name = lead.data.attributes.first_name;
    leadToUpdate.data.attributes.last_name = lead.data.attributes.last_name;
    leadToUpdate.data.attributes.department = lead.data.attributes.department;
    leadToUpdate.data.attributes.email_c = lead.data.attributes.email_c;
    leadToUpdate.data.attributes.phone_mobile =
      lead.data.attributes.phone_mobile;
    leadToUpdate.data.attributes.assigned_to_name_c =
      lead.data.attributes.assigned_to_name_c;
    leadToUpdate.data.attributes.assigned_user_id =
      lead.data.attributes.assigned_user_id;

    (leadToUpdate.data.type = 'Leads'),
      (leadToUpdate.data.attributes.first_name =
        this.exampleForm.controls['firstName'].value),
      (leadToUpdate.data.attributes.last_name =
        this.exampleForm.controls['lastName2'].value),
      (leadToUpdate.data.attributes.department =
        this.exampleForm.controls['company2'].value),
      (leadToUpdate.data.attributes.email_c =
        this.exampleForm.controls['email2'].value),
      (leadToUpdate.data.attributes.phone_mobile =
        this.exampleForm.controls['phone2'].value),
      leadToUpdate.data.attributes.assigned_to_name_c =
        this.stringifyAssignment(this.controlAssignments.value ?? '') ,
      (leadToUpdate.data.attributes.assigned_user_id =
        this.currentUser.data.id);
    leadToUpdate.data.attributes.modified_user_id = this.currentUser.data.id;
    leadToUpdate.data.attributes.modified_by_name =
      this.currentUser.data.attributes.full_name;

    if (
      leadToUpdate.data.attributes.first_name == '' ||
      leadToUpdate.data.attributes.last_name == '' ||
      leadToUpdate.data.attributes.email_c == '' ||
      leadToUpdate.data.attributes.phone_mobile == '' ||
      leadToUpdate.data.attributes.assigned_to_name_c == ''
    ) {
      this.content = 'Please fill all required fields';
      this.notificationService.showWarning(this.warning);
      return;
    } else if (
      leadToUpdate.data.attributes.first_name != '' &&
      leadToUpdate.data.attributes.last_name != '' &&
      leadToUpdate.data.attributes.email_c != '' &&
      leadToUpdate.data.attributes.phone_mobile != '' &&
      leadToUpdate.data.attributes.assigned_to_name_c != ''
    ) {
      this.store.dispatch(LeadAction.updateLead({ lead: leadToUpdate }));
      let sub:any = this.lead$.subscribe({
        next: (data) => {
          if(data.status == "Update lead success"){
            this.content = 'Update lead success';
            this.notificationService.showSuccess(this.success);
            return;
          }
        },
        complete: () => sub.unsubscribe(),
      })
    }else{
      this.content = 'Update lead fail';
      this.notificationService.showError(this.error);
      return;
    }
  }

  exampleForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName2: FormControl = new FormControl('');
  company2: FormControl = new FormControl('');
  email2: FormControl = new FormControl('');
  phone2: FormControl = new FormControl('');

  //control assignment selection
  controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
    { assign: 'Văn Việt' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  name = '';
  lastName = '';
  company = '';
  email = '';
  reportTo = '';
  phone = '';

  showDialog(
    content: PolymorpheusContent,
    size: TuiDialogSize,
    lead: any
  ): void {
    console.log(lead);
    this.firstName.setValue(lead.data.attributes.first_name);
    this.lastName2.setValue(lead.data.attributes.last_name);
    this.email2.setValue(lead.data.attributes.email1);
    this.phone2.setValue(lead.data.attributes.phone_mobile);
    this.company2.setValue(lead.data.attributes.department);
    this.controlAssignments.setValue(lead.data.attributes.assigned_user_name)
    // if(lead.data.attributes.assigned_to_name_c === 'undefined'){
    //   this.controlAssignments.setValue('');
    // }else{
    //   this.controlAssignments.setValue({ assign: lead.data.attributes.assigned_to_name_c });
    // }
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
          this.lastName = '';
          this.company = '';
          this.email = '';
          this.reportTo = '';
          this.phone = '';
          this.dialogForm.markAsPristine();
        },
      });
  }
}
