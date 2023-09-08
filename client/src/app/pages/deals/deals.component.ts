import { DealsService } from '../deals/deals.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DealState } from './ngrx/state/deal.state';
import { Store } from '@ngrx/store';
import { DealAction } from './ngrx/action/deal.action';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  deal$!: Observable<DealState>;

  constructor(public dealsService: DealsService, private store: Store<{deal: DealState}>) {
  }
  subDeals: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Deals';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllDeals();
  }

  getAllDeals() {
    this.deal$ = this.store.select('deal');
    this.store.dispatch(DealAction.getDeals())
    this.deal$.subscribe((data) => {
      console.log(data.deals);
    })
  }
}
