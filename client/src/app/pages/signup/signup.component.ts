import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { SignupService } from './signup.service';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { Store } from '@ngrx/store';
import { SignUpState } from './ngrx/state/signup.state';
import { SignUpAction } from './ngrx/action/signup.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUp$!: Observable<SignUpState>;
  constructor(private signupService: SignupService, private store: Store<{ signup: SignUpState}>){
    this.signUp$ = store.select('signup');
    this.myForm.addControl('firstName', this.firstName);
    this.myForm.addControl('lastName', this.lastName);
    this.myForm.addControl('email', this.email);
    this.myForm.addControl('userName', this.userName);
    this.myForm.addControl('password', this.password);
  }

  myForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  signup(){
    let newAuthAccount: AuthAccount = {
      id: '',
      firstName: this.myForm.controls['firstName'].value,
      lastName: this.myForm.controls['lastName'].value,
      email: this.myForm.controls['email'].value,
      username: this.myForm.controls['userName'].value,
      hash_password: this.myForm.controls['password'].value
    }
    this.store.dispatch(SignUpAction.signUp({authAccount: newAuthAccount}))
    this.signUp$.subscribe((data) => {
      // console.log(data)
    })
    // let result = this.signupService.signup(newAuthAccount)
  }
}
