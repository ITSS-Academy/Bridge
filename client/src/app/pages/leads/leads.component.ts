import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Leads';
  pageEmpty = true;

  addInfo() {
    this.pageEmpty = !this.pageEmpty;
  }
}
