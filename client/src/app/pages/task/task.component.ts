import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  tasks!: Observable<any>;
  subTasks: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Tasks';
  pageEmpty = true;

  addInfo() {
    this.pageEmpty = !this.pageEmpty;
  }
}
