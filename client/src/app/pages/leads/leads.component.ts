import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LeadsService } from './leads.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LeadState } from './ngrx/state/lead.state';
import { Store } from '@ngrx/store';
import { Lead } from 'src/app/models/lead.model';
import { LeadAction } from './ngrx/action/lead.action';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  leads$!: Observable<LeadState>;
  subLeads: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Leads';
  pageEmpty = true;

  constructor(private leadService: LeadsService, private store: Store<{lead: LeadState}>) {
    this.leads$ = this.store.select('lead');
  }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    this.store.dispatch(LeadAction.getLeads());
  }
}
