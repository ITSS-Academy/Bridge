import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDialogService, TuiDialogContext } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.component.less'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent {
  //user dialog
  name = '';
  primaryGroup = '';
  email = '';
  reportTo = '';
  role = '';

  //employee dialog
  secondEmail = '';
  phoneNumber = '';
  officeNumber = '';
  fax = '';
  address = '';
  city = '';
  state = '';
  country = '';
  lastName = '';

  User = ['User', 'User Management'];
  open = false;

  //test checkbox input true or false
  testForm = new FormGroup({
    testValue: new FormControl(false), //input value true or false into the form control
  });

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  onModelChangeName(name: string): void {
    this.name = name;
    this.dialogForm.markAsDirty();
  }

  onModelChangeEmail(email: string): void {
    this.email = email;
    this.dialogForm.markAsDirty();
  }

  onModelChangeGroup(group: string): void {
    this.primaryGroup = group;
    this.dialogForm.markAsDirty();
  }

  onModelChangeReport(report: string): void {
    this.reportTo = report;
    this.dialogForm.markAsDirty();
  }

  onModelChangeLastName(lastName: string): void {
    this.lastName = lastName;
    this.dialogForm.markAsDirty();
  }

  onModelChangePhone(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
    this.dialogForm.markAsDirty();
  }

  //control language selection
  readonly controlLanguages = new FormControl();

  readonly languages = [{ language: 'Vietnamese' }, { language: 'English' }];

  readonly stringifyLanguage = (item: { language: string }): string =>
    `${item.language}`;
  //

  //control country selection
  readonly controlCountries = new FormControl();

  readonly countries = [
    { country: 'Vietnam' },
    { country: 'England' },
    { country: 'United States' },
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

  readonly stringifyDecimalSeparator = (item: { separator: string }): string =>
    `${item.separator}`;
  //

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

  //control currency format selection
  readonly controlCurrencyFormats = new FormControl();

  readonly currencyFormats = [
    { format: 'Currency Symbol' },
    { format: 'Currency Code' },
  ];

  readonly stringifyCurrencyFormat = (item: { format: string }): string =>
    `${item.format}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;
  //

  //control office phone selection
  readonly officePhones = Object.values(TuiCountryIsoCode);

  countryIsoCodeOffice = TuiCountryIsoCode.US;
  //

  showDialog(content: PolymorpheusContent): void {
    const closeable = this.dialogForm.withPrompt({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs
      .open(content, { closeable, dismissible: closeable })
      .subscribe({
        complete: () => {
          this.name = '';
          this.primaryGroup = '';
          this.email = '';
          this.reportTo = '';
          this.role = '';
          this.dialogForm.markAsPristine();
        },
      });
  }
}
