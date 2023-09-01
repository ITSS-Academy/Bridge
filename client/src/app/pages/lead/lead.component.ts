import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { AuthService } from 'src/app/services/auth.service';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LeadComponent {
  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    public authService: AuthService
  ) {
    // console.log(this.authService.currentUser);
  }

  // title = 'Leads';
  testForm = new FormGroup({
    testValue1: new FormControl(false),
  });
  title = 'Leads';
  pageEmpty = true;

  exampleForm = new FormGroup({});

  name = '';
  lastName = '';
  company = '';
  email = '';
  reportTo = '';
  phone = '';

  onModelChangeName(name: string): void {
    this.name = name;
    this.dialogForm.markAsDirty();
  }

  onModelChangeLastName(lastName: string): void {
    this.lastName = lastName;
    this.dialogForm.markAsDirty();
  }

  onModelChangeEmail(email: string): void {
    this.email = email;
    this.dialogForm.markAsDirty();
  }

  onModelChangeCompany(company: string): void {
    this.company = company;
    this.dialogForm.markAsDirty();
  }

  onModelChangeReport(report: string): void {
    this.reportTo = report;
    this.dialogForm.markAsDirty();
  }

  //control assignment selection
  readonly controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;
  //

  addTask() {
    this.pageEmpty = !this.pageEmpty;
  }

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
