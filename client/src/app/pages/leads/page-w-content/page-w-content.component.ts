import { Observable, map } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { LeadsService } from '../leads.service';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
})
export class PageWContentComponent{
  @Input()
  leads!: Observable<any>;

  constructor(public leadService: LeadsService) {}
  
}
