import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent {
  title = 'Deals';
  pageEmpty = false;

  addDeal(){
    this.pageEmpty = !this.pageEmpty
  }
}
