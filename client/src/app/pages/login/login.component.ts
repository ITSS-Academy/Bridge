import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.less'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  testForm = new FormGroup({
    testValue1: new FormControl(false),
  })
}
