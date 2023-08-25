import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss', './admin-users.component.less'],
})
export class AdminUsersComponent {
  name = '';
  password = '';

  firstName = '';
  lastName = '';
  secondEmail = '';
  phone = '';
  homeAddress = '';
  city = '';
  state = '';

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    public route: Router
  ) {}
  exampleForm = new FormGroup({
    groupName: new FormControl(''),
    groupEmail: new FormControl(''),
    description: new FormControl(''),
    groupMember: new FormControl(''),
  });

  //control user type selection
  readonly controlUserTypes = new FormControl();

  readonly UserTypes = [{ type: 'Admin' }, { type: 'User' }];

  readonly stringifyUserType = (item: { type: string }): string =>
    `${item.type}`;
  //

  //control role selection
  readonly controlRoles = new FormControl();

  readonly Roles = [
    { role: 'CEO' },
    { role: 'VP of Sales' },
    { role: 'Marketing Manager' },
    { role: 'Sales Manager' },
    { role: 'Sales Representative' },
    { role: 'VP of Customer Services' },
    { role: 'Support Manager' },
    { role: 'Support Representative' },
    { role: 'IT Consultant' },
  ];

  readonly stringifyRole = (item: { role: string }): string => `${item.role}`;
  //

  //control role selection
  readonly controlReports = new FormControl();

  readonly Reports = [{ report: 'Khoa Bùi' }, { report: 'Minh Quân' }];

  readonly stringifyReport = (item: { report: string }): string =>
    `${item.report}`;
  //

  //control primary group selection
  readonly controlPrimaryGroups = new FormControl();

  readonly PrimaryGroups = [
    { group: 'Marketing Group' },
    { group: 'Support Group' },
    { group: 'Team Selling' },
  ];

  readonly stringifyPrimaryGroup = (item: { group: string }): string =>
    `${item.group}`;
  //

  //control primary group selection
  readonly controlLanguages = new FormControl();

  readonly Languages = [{ language: 'Vietnamese' }, { language: 'English' }];

  readonly stringifyLanguage = (item: { language: string }): string =>
    `${item.language}`;
  //

  //control country selection
  readonly controlCountries = new FormControl();

  readonly Countries = [
    { country: 'Vietnam' },
    { country: 'United State' },
    { country: 'Korea' },
  ];

  readonly stringifyCountry = (item: { country: string }): string =>
    `${item.country}`;
  //

  //control preferred currency selection
  readonly controlPreferredCurrencies = new FormControl();

  readonly preferredCurrencies = [
    { pref: 'USA, Dollars' },
    { pref: 'Vietnam, Dong' },
  ];

  readonly stringifyPreferredCurrency = (item: { pref: string }): string =>
    `${item.pref}`;
  //

  //control digit grouping pattern selection
  readonly controlDigitGroupingPatterns = new FormControl();

  readonly digitGroupingPatterns = [
    { pattern: '123456789' },
    { pattern: '123,456,789' },
    { pattern: '123456,789' },
  ];

  readonly stringifyDigitGroupingPattern = (item: {
    pattern: string;
  }): string => `${item.pattern}`;
  //

  //control decimal separator selection
  readonly controlDecimalSeparators = new FormControl();

  readonly decimalSeparators = [
    { separator: ',' },
    { separator: '.' },
    { separator: '$' },
  ];

  //control digit grouping separator selection
  readonly controlDigitGroupingSeparators = new FormControl();

  readonly digitGroupingSeparators = [
    { groupSeparator: ',' },
    { groupSeparator: '.' },
    { groupSeparator: '$' },
  ];

  readonly stringifyDigitGroupingSeparator = (item: {
    groupSeparator: string;
  }): string => `${item.groupSeparator}`;
  //

  readonly stringifyDecimalSeparator = (item: { separator: string }): string =>
    `${item.separator}`;
  //

  //control symbol placement selection
  readonly controlSymbolPlacements = new FormControl();

  readonly symbolPlacements = [{ placement: '$1.0' }, { placement: '1.0$' }];

  readonly stringifySymbolPlacement = (item: { placement: string }): string =>
    `${item.placement}`;
  //

  //control currency decimal selection
  readonly controlCurrencyDecimals = new FormControl();

  readonly currencyDecimals = [
    { decimal: '0' },
    { decimal: '2' },
    { decimal: '3' },
    { decimal: '4' },
    { decimal: '5' },
  ];

  readonly stringifyCurrencyDecimal = (item: { decimal: string }): string =>
    `${item.decimal}`;
  //

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

  navigateToViewUser(){
    this.route.navigate(['/user']);
  }
}
