import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit{
  leads!: Observable<any>;
  subLeads:any[] = []
    //ĐỔI TITLE THÀNH TÊN TRANG
    title = 'Leads';

    pageEmpty = true;
  constructor(private leadService: LeadsService) {
    console.log(this.leads)

    // this.leads = this.leadService.getAllLeads();
    // this.leads.subscribe((data) => {
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
    this.getAllLeads();
  }

  async getAllLeads() {
    this.leads = (await this.leadService.getAllLeads()).pipe(
      map((result: any) => 
        result.map((item: any) => {
          this.subLeads.push(item.data().data)
          // console.log(item.data());
          return item.data().data;
        })
      )
    );
    console.log(this.leads);    // console.log(result.docs.map((item: any) => item.data()));
  }




  // addInfo() {
  //   this.pageEmpty = !this.pageEmpty;
  // }

}
