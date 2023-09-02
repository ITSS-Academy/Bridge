import { Component } from '@angular/core';
import { LeadsService } from './leads.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent {

  constructor(private leadService: LeadsService) {}

  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Leads';
  pageEmpty = true;

  addInfo() {
    this.pageEmpty = !this.pageEmpty;
  }
}
