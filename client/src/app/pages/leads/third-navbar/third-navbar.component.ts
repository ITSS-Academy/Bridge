import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,Output,EventEmitter,OnInit, Input
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThirdNavbarComponent implements OnInit{
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  ngOnInit(){}

  emitAddInfo(){
    this.addInfo.emit()
  }

  //CODE DIALOG
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
