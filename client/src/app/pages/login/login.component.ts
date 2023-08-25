import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { LoginState } from './ngrx/state/login.state';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { LoginAccount } from 'src/app/models/login-account.model';
import { LoginAction } from './ngrx/action/login.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.less'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  login$!: Observable<LoginState>;
  constructor(private loginService: LoginService, private store: Store<{login: LoginState}>, public router: Router) {
    this.login$ = store.select('login');

    this.myForm.addControl('userName', this.userName);
    this.myForm.addControl('password', this.password);
    
  }
  myForm: FormGroup = new FormGroup({});
  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  testForm = new FormGroup({
    testValue1: new FormControl(false),
  })


  login(){
    let account: LoginAccount = {
      username: this.myForm.controls['userName'].value,
      password: this.myForm.controls['password'].value
    }
    this.store.dispatch(LoginAction.login({loginAccount: account}))
    
    let result = this.login$.pipe(map((data) => data))
    result.subscribe((data) => {
      console.log(data)
    })
    // let result = this.signupService.signup(newAuthAccount)
  }
}
