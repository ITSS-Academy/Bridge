import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  exampleForm = new FormGroup({
        exampleControl: new FormControl(''),
    });
 
    open = false;
 
    showDialog(): void {
        this.open = true;
    }

}
