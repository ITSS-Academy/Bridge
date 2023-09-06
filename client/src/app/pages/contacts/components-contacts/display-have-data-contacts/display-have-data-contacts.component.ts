import { Component, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactState } from '../ngrx/state/contact.state';
import { Store } from '@ngrx/store';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { AuthService } from 'src/app/services/auth.service';
import { ContactsService } from '../../contact.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ContactAction } from '../ngrx/action/contact.action';

@Component({
  selector: 'app-display-have-data-contacts',
  templateUrl: './display-have-data-contacts.component.html',
  styleUrls: ['./display-have-data-contacts.component.scss'],
  providers: [TuiDialogFormService],
})
export class DisplayHaveDataContactsComponent {
  @Input()
  contacts!: Observable<any>;

  contact$!: Observable<ContactState>;

  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private contactService: ContactsService,
    public authService: AuthService,
    private store: Store<{ contact: ContactState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.contact$ = store.select('contact');
    this.contactsForm.addControl('firstName', this.firstName);
    this.contactsForm.addControl('lastName', this.lastName);
    this.contactsForm.addControl('email', this.email);
    this.contactsForm.addControl('phone', this.phone);
    this.contactsForm.addControl('organizationName', this.organizationName);

    console.log(this.currentUser);
  }

  deleteContact(id: string) {
    this.store.dispatch(ContactAction.deleteContact({ id: id }));
  }

  //CODE DIALOG
  // exampleForm = new FormGroup({}); 
  contactsForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  organizationName: FormControl = new FormControl('');

  //phone
  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  // seclect status
  readonly controlStatus = new FormControl();

  readonly allStatus = [
    { name: 'Cold' },
    { name: 'Warm' },
    { name: 'Hot' },
    { name: 'NlWC' },
    { name: 'Inactive' },
  ];

  readonly stringifyStatus = (status: { name: string }): string =>
    `${status.name} `;

  // seclect lifeCycleStage
  readonly controlLife = new FormControl();

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

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
    { assign: 'Team Selling' },
    { assign: 'Marketing Group' },
    { assign: 'Support Group' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //Open Dialog
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
          this.dialogForm.markAsPristine();
        },
      });
  }
}
