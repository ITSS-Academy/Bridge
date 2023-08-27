import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {
  title = 'Cases';
  pageEmpty = true;

  addCase(){
    this.pageEmpty = !this.pageEmpty
  }
}
