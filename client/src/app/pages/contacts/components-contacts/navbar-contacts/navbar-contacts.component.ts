import { Component, Inject } from '@angular/core';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-navbar-contacts',
  templateUrl: './navbar-contacts.component.html',
  styleUrls: ['./navbar-contacts.component.scss'],
})
export class NavbarContactsComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize
  ): void {
    this.dialogs
      .open(content, {
        size,
      })
      .subscribe();
  }

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
  
  //phone
  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  // seclect status

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

  // seclect assignedTo

  readonly allAss = [
    ['TriNguyen', 'KhoaBui', 'DuongLe', 'VietVo', 'QuanTran'],
    ['Team Selling', 'Marketing Group', 'Support Group'],
  ];

  labels = ['User', 'Group'];

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
}
