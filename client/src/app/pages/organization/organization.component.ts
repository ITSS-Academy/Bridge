import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {
  // title = 'Organizations';
  title = 'Organizations';
  pageEmpty = true;

  addTask(){
    this.pageEmpty = !this.pageEmpty
  }
}
