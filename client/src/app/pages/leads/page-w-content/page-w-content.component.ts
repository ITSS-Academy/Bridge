import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { LeadsService } from '../leads.service';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
})
export class PageWContentComponent implements OnInit {
  @Input()
  leads!: Observable<any>;

  constructor(public leadService: LeadsService) {}
  ngOnInit(): void {
    this.getAllLeads();
  }

   getAllLeads() {
    let result = this.leadService.getAllLeads();
    result.subscribe((data) => {
      console.log(data);
    });
    // console.log(result.docs.map((item: any) => item.data()));
  }
}
