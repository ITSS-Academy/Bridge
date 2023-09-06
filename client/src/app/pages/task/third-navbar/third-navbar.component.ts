import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss'],
  providers: [TuiDialogFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThirdNavbarComponent implements OnInit {
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();
  emitAddInfo() {
    this.addInfo.emit();
  }
  name = '';
  time = '';
  location = '';
  test = ''

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });

  exampleForm = new FormGroup({});

  ngOnInit() {}

  onModelChangeName(name: string): void {
    this.name = name;
    this.dialogForm.markAsDirty();
  }

  onModelChangeTime(time: string): void {
    this.time = time;
    this.dialogForm.markAsDirty();
  }

  onModelChangeLocation(location: string): void {
    this.location = location;
    this.dialogForm.markAsDirty();
  }

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

  //control pipe line selection
  readonly controlStages = new FormControl();

  readonly stages = [
    { stage: 'Pending' },
    { stage: 'In progress' },
    { stage: 'Completed' },
    { stage: 'Skipped' },
  ];

  readonly stringifyStage = (item: { stage: string }): string =>
    `${item.stage}`;
  //

  //control pipe line selection
  readonly controlPriorities = new FormControl();

  readonly priorities = [
    { priority: 'High' },
    { priority: 'Medium' },
    { priority: 'Low' },
  ];

  readonly stringifyPriority = (item: { priority: string }): string =>
    `${item.priority}`;
  //

  //control pipe line selection
  readonly controlTasks = new FormControl();

  readonly tasks = [
    { task: 'Checklist Team' },
    { task: 'Content' },
    { task: 'Learning' },
    { task: 'Sales' },
    { task: 'Training' },
    { task: 'Repair' },
    { task: 'General' },
    { task: 'Reminder' },
    { task: 'Call' },
    { task: 'Social Outreach' },
    { task: 'Email' },
  ];

  readonly stringifyTask = (item: { task: string }): string => `${item.task}`;
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
        complete: () => {},
      });
  }
}
