import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { TaskService } from './task.service';
import { Store } from '@ngrx/store';
import { TaskAction } from './ngrx/action/task.action';
import { TaskState } from './ngrx/state/task.state';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Tasks';
  pageEmpty = true;
  task$!: Observable<TaskState>;
  subTask: any[] = [];

  constructor(private taskService: TaskService, private store: Store<{task: TaskState}>) {}

  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask() {
    this.task$ = this.store.select('task');
    this.store.dispatch(TaskAction.getTasks());
  }
}
