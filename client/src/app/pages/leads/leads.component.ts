import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {
  title = 'Leads';
  pageEmpty = true;

  addTask(){
    this.pageEmpty = !this.pageEmpty
  }
}