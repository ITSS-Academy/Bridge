import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  title = 'Tasks';
  pageEmpty = true;

  addTask(){
    this.pageEmpty = !this.pageEmpty
  }
}
