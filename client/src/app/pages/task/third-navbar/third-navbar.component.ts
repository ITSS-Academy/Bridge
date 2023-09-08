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
import { Observable } from 'rxjs';
import { TaskState } from '../ngrx/state/task.state';
import { Store } from '@ngrx/store';
import { TaskAction } from '../ngrx/action/task.action';

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
  task$!: Observable<TaskState>;
  currentUser!: any;
  name = '';
  time = '';
  location = '';
  test: TuiDay | null = null;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private store: Store<{ task: TaskState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.task$ = this.store.select('task');

    this.exampleForm.addControl('Name', this.Name);
    this.exampleForm.addControl('Assignedto', this.Assignedto);
    // this.exampleForm.addControl('Estimatetime', this.Estimatetime);
    // this.exampleForm.addControl('DuedateTime', this.DuedateTime);
    this.exampleForm.addControl('Stage', this.Stage);
    this.exampleForm.addControl('Priority', this.Priority);
    this.exampleForm.addControl('Location', this.Location);
    this.exampleForm.addControl('Tasktype', this.Tasktype);
    this.exampleForm.addControl('Description', this.Description);
  }
  addTask() {
    let task: any = {
      data: {
        type: 'Tasks',
        attributes: {
          name: this.exampleForm.controls['Name'].value,
          assigned_to_c: this.stringifyAssignment(
            this.controlAssignments.value
          ),
          // date_start: this.exampleForm.controls['Estimatetime'].value,
          // date_due: this.exampleForm.controls['DuedateTime'].value,
          status: this.stringifyStage(this.controlStages.value),
          priority: this.stringifyPriority(this.controlPriorities.value),
          location_c: this.exampleForm.controls['Location'].value,
          task_type_c: this.stringifyTask(this.controlTasks.value),
          description: this.exampleForm.controls['Description'].value,
        },
      },
    };
    this.store.dispatch(TaskAction.addTask({ task: task }));
    let subscription: any = this.task$.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => subscription.unsubscribe(),
    });
    console.log(this.test?.toLocalNativeDate().getDate());
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });

  exampleForm: FormGroup = new FormGroup({});

  Name: FormControl = new FormControl('');
  Assignedto: FormControl = new FormControl('');
  Estimatetime: FormControl = new FormControl('');
  DuedateTime: FormControl = new FormControl(new TuiDay(2021, 9, 1));
  Stage: FormControl = new FormControl('');
  Priority: FormControl = new FormControl('');
  Location: FormControl = new FormControl('');
  Tasktype: FormControl = new FormControl('');
  Description: FormControl = new FormControl('');

  ngOnInit() {}

  showDate() {
    console.log(this.testForm.value.testValue);
  }

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
