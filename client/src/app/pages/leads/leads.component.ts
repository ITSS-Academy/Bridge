import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LeadState } from './ngrx/state/lead.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  leads!: Observable<any>;
  subLeads: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Leads';

  pageEmpty = true;

  constructor(private leadService: LeadsService) {
  }

  ngOnInit(): void {
    this.getAllLeads();
  }

  async getAllLeads() {
    this.leads = (await this.leadService.getAllLeads()).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data().data;
        })
      )
    );
  }
}
