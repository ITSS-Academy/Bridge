import { Component, Inject, Input, ViewChild } from '@angular/core';
import { Observable, last } from 'rxjs';
import { ContactState } from '../ngrx/state/contact.state';
import { Store } from '@ngrx/store';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { AuthService } from 'src/app/services/auth.service';
import { ContactsService } from '../../contact.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ContactAction } from '../ngrx/action/contact.action';
import { Contact } from 'src/app/models/contact.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-display-have-data-contacts',
  templateUrl: './display-have-data-contacts.component.html',
  styleUrls: ['./display-have-data-contacts.component.scss'],
  providers: [TuiDialogFormService],
})
export class DisplayHaveDataContactsComponent {
  @Input()
  contact$!: Observable<ContactState>;

  content = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;


  notification = '';
  status = '';
  show = false;

  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private contactService: ContactsService,
    public authService: AuthService,
    private store: Store<{ contact: ContactState }>,
    private nocationService: NotificationService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.contact$ = store.select('contact');
    this.contactsForm.addControl('firstName', this.firstName);
    this.contactsForm.addControl('lastName', this.lastName);
    this.contactsForm.addControl('email', this.email);
    this.contactsForm.addControl('phone', this.phone);
    this.contactsForm.addControl('organizationName', this.organizationName);
    // this.contactsForm.addControl('title', this.title);

    console.log(this.currentUser);
  }

  deleteContact(id: string) {
    this.store.dispatch(ContactAction.deleteContact({ id: id }));
    let sub:any = this.contact$.subscribe({
      next: (data) => {
        if(data.status == 'Delete contact success') {
          this.content = 'Delete contact successfully';
          this.nocationService.showSuccess(this.success);
          return
        }
      },
      complete: () => sub.unsubscribe()
    })
    return;
  }

  updateContact(contact: any) {
    let newContact: Contact = {...contact,
      data: {
        type: "Contacts",
        id: contact.data.id,
        attributes: {
          first_name: this.contactsForm.controls['firstName'].value,
          last_name: this.contactsForm.controls['lastName'].value,
          email_c: this.contactsForm.controls['email'].value,
          phone_mobile: this.contactsForm.controls['phone'].value,
          title: this.stringifyTitle(this.controlTitle.value ?? ''),
          department: this.contactsForm.controls['organizationName'].value,
          assigned_to_name_c: this.stringifyAssignment(this.controlAssignments.value ?? ''),
          status_c: this.stringifyStatus(this.controlStatus.value ?? ''),
          stage_c: this.stringifyLife(this.controlLife.value ?? '')
        }
      }};
      if(this.contactsForm.controls['firstName'].value == '' || this.contactsForm.controls['lastName'].value == '' || this.contactsForm.controls['email'].value == '' || this.contactsForm.controls['phone'].value == '' || this.contactsForm.controls['organizationName'].value == '' || newContact.data.attributes.assigned_to_name_c == '' || newContact.data.attributes.stage_c == '' || newContact.data.attributes.status_c == '' || newContact.data.attributes.title == '') {
        this.content = 'Please fill all required fields';
        this.nocationService.showWarning(this.warning);
        return;
      }else if(this.contactsForm.controls['firstName'].value != '' && this.contactsForm.controls['lastName'].value != '' && this.contactsForm.controls['email'].value != '' && this.contactsForm.controls['phone'].value != '' && this.contactsForm.controls['organizationName'].value != '' && newContact.data.attributes.assigned_to_name_c != '' && newContact.data.attributes.status_c != '' && newContact.data.attributes.stage_c != '' && newContact.data.attributes.title != '') {
        this.store.dispatch(ContactAction.updateContact({ contact: newContact }));
        this.content = 'Update contact successfully';
        this.nocationService.showSuccess(this.success);
        return 
      }else{
        this.content = 'Update contact failed';
        this.nocationService.showError(this.error);
        return;
      }
  }

  //CODE DIALOG
  // exampleForm = new FormGroup({});
  contactsForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  organizationName: FormControl = new FormControl('');
  title: FormControl = new FormControl('');
  assignedTo: FormControl = new FormControl('');

  //phone
countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  // seclect status
  controlStatus = new FormControl();

allStatus = [
    { name: 'Cold' },
    { name: 'Warm' },
    { name: 'Hot' },
    { name: 'NlWC' },
    { name: 'Inactive' },
  ];

  stringifyStatus = (status: { name: string }): string =>
    `${status.name} `;


    // seclect title
  controlTitle = new FormControl();

allTitle = [
    { name: 'CEO' },
    { name: 'VP' },
    { name: 'Director' },
    { name: 'Sales Manager' },
    { name: 'Support Manager' },
    { name: 'Sale Representative' },
    { name: 'Support Agent' },
    { name: 'Procurment Manager' },
  ];

  stringifyTitle = (title: { name: string }): string =>
    `${title.name} `;

  // seclect lifeCycleStage
  controlLife = new FormControl();

allLife = [
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

  stringifyLife = (life: { name: string }): string => 
    `${life.name} `;
  //

  //control assignment selection
  controlAssignments = new FormControl();

  assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Trí Nguyễn' },
    { assign: 'Dương Thùy' },
    { assign: 'Văn Việt' },
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  stringifyAssignment = (item: { assign: string }) : string =>
    `${item.assign}`;
  //

  //Open Dialog
  showDialog(content: PolymorpheusContent, size: TuiDialogSize, contacts: any): void {
    console.log(contacts);
    this.firstName.setValue(contacts.data.attributes.first_name);
    this.lastName.setValue(contacts.data.attributes.last_name);
    this.email.setValue(contacts.data.attributes.email_c);
    this.phone.setValue(contacts.data.attributes.phone_mobile);
    this.organizationName.setValue(contacts.data.attributes.department);
    this.title.setValue(contacts.data.attributes.title);
    this.assignedTo.setValue(contacts.data.attributes.assigned_to_name_c);

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
