import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],
})
export class LeadComponent {
  // title = 'Leads';
  testForm = new FormGroup({
    testValue1: new FormControl(false),
  });
  title = 'Leads';
  pageEmpty = true;

  addTask(){
    this.pageEmpty = !this.pageEmpty
  }
}
