import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { LeadsService } from './leads.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent {
  leads!: Observable<any>;

  constructor(private leadService: LeadsService) {
    // this.leads = this.leadService.getAllLeads();
    // this.leads.subscribe((data) => {
    //   console.log(data);
    // })
  }



  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Leads';
  pageEmpty = true;

  // addInfo() {
  //   this.pageEmpty = !this.pageEmpty;
  // }

}
