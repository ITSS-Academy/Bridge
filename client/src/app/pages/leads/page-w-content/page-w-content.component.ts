import { Observable, map } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { LeadsService } from '../leads.service';
import { LeadState } from '../ngrx/state/lead.state';
import { Store } from '@ngrx/store';
import { LeadAction } from '../ngrx/action/lead.action';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
})
export class PageWContentComponent{
  @Input()
  leads!: Observable<any>;

  constructor(public leadService: LeadsService,private store: Store<{ lead: LeadState }>) {
    this.lead$ = store.select('lead');

  }
  lead$!: Observable<LeadState>;
  
  deleteLead(id: string) {
    this.store.dispatch(LeadAction.deleteLead({ id: id}));
  }
}
