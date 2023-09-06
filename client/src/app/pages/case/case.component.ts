import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CasesService } from './case.service';
import { Store } from '@ngrx/store';
import { CaseState } from './ngrx/state/case.state';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  constructor(public casesService: CasesService) {}
  cases!: Observable<any>;
  subCases: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Cases';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllCases();
  }

  async getAllCases() {
    this.cases = (await this.casesService.getAllCases()).pipe(
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
