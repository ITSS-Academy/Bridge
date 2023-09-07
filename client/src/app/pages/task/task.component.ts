import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Tasks';
  pageEmpty = true;
  tasks!: Observable<any>;
  subTask: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTask();
  }

  async getAllTask() {
    this.tasks = (await this.taskService.getAllTask()).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data();
        })
      )
    );
  }
}
