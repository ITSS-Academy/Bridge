import { DealsService } from '../deals/deals.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DealState } from './ngrx/state/deal.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  constructor(public dealsService: DealsService) {}
  deals!: Observable<any>;
  subDeals: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Deals';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllDeals();
  }

  async getAllDeals() {
    this.deals = (await this.dealsService.getAllDeals()).pipe(
      map((result: any) =>
        result.map((item: any) => {
          // console.log(item.data());
          return item.data().data;
        })
      )
    );
    // console.log(this.leads);    // console.log(result.docs.map((item: any) => item.data()));
  }
}
