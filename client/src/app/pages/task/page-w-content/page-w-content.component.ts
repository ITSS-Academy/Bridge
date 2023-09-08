import { Component, Inject, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskAction } from '../ngrx/action/task.action';
import { TaskService } from '../task.service';
import { Store } from '@ngrx/store';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Lead } from 'src/app/models/lead.model';
import { TaskState } from '../ngrx/state/task.state';
import { TuiDay } from '@taiga-ui/cdk';
import { NotificationService } from 'src/app/services/notification.service';
// import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  tasks$!: Observable<TaskState>;

  content = '';
  @ViewChild('success') success: any;
  @ViewChild('warning') warning: any;
  @ViewChild('error') error: any;

  currentUser!: any;
  task$: any;

  constructor(
    public taskService: TaskService,
    private store: Store<{ task: TaskState }>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    private notificationService: NotificationService
  ) {
    this.tasks$ = store.select('task');

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

  deleteTask(id: string) {
    this.store.dispatch(TaskAction.deleteTask({ id: id }));
    this.content = 'Delete task successfully!';
    this.notificationService.showSuccess(this.success);
  }

  updateTask(task: any) {
    let taskToUpdate: any = {
      ...task,
      data: {
        id: task.data.id,
        type: 'Tasks',
        attributes: {
          name: this.exampleForm.controls['Name'].value,
          assigned_to_c: this.stringifyAssignment(
            this.controlAssignments.value
          ),
          from_date_c: this.from?.toString(),
          to_date_c: this.to?.toString(),
          status: this.stringifyStage(this.controlStages.value),
          priority: this.stringifyPriority(this.controlPriorities.value),
          location_c: this.exampleForm.controls['Location'].value,
          task_type_c: this.stringifyTask(this.controlTasks.value),
          description: this.exampleForm.controls['Description'].value,
        },
      },
    };
    this.store.dispatch(TaskAction.updateTask({ task: taskToUpdate }));
    this.content = 'Update task successfully!';
    this.notificationService.showSuccess(this.success);
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });
  readonly testForm2 = new FormGroup({
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

  name = '';
  time = '';
  location = '';
  from: TuiDay | null = null;
  to: TuiDay | null = null;

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

  showDialog(
    content: PolymorpheusContent,
    size: TuiDialogSize,
    task: any
  ): void {
    this.exampleForm.controls['Name'].setValue(task.data.attributes.name);

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
