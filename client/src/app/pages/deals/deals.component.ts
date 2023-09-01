import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Deals';
  pageEmpty = true;

  addInfo() {
    this.pageEmpty = !this.pageEmpty;
  }
}
