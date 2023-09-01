import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Organizations';
  pageEmpty = true;

  addInfo() {
    this.pageEmpty = !this.pageEmpty;
  }
}
