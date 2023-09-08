import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CasesService } from './case.service';
import { Store } from '@ngrx/store';
import { CaseState } from './ngrx/state/case.state';
import { CaseAction } from './ngrx/action/case.action';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  constructor(public caseService: CasesService, private store: Store<{case: CaseState}>) {}
  case$!: Observable<CaseState>;
  subCases: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Cases';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllCases();
  }

  getAllCases() {
    this.case$ = this.store.select('case');
    this.store.dispatch(CaseAction.getCases());
  }
}
