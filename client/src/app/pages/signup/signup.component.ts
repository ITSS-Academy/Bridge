import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { Store } from '@ngrx/store';
import { SignUpState } from './ngrx/state/signup.state';
import { SignUpAction } from './ngrx/action/signup.action';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  status = '';
  show = false;
  notification = '';
  signUp$!: Observable<SignUpState>;
  constructor(
    private router: Router,
    private signupService: SignupService,
    private store: Store<{ signup: SignUpState }>
  ) {
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

  signup() {
    let newAuthAccount: AuthAccount = {
      id: '',
      firstName: this.myForm.controls['firstName'].value,
      lastName: this.myForm.controls['lastName'].value,
      email: this.myForm.controls['email'].value,
      username: this.myForm.controls['userName'].value,
      hash_password: this.myForm.controls['password'].value,
    };
    if (
      newAuthAccount.firstName == '' ||
      newAuthAccount.lastName == '' ||
      newAuthAccount.email == '' ||
      newAuthAccount.username == '' ||
      newAuthAccount.hash_password == ''
    ) {
      this.notification = 'Please fill out all the fields';
      this.status = 'error';
      this.show = true;
      return;
    }
    let check$ = this.signupService.checkExisted(newAuthAccount);
    check$.subscribe((data) => {
      if (data == true) {
        this.notification = 'Username or email has already existed';
        this.status = 'error';
        this.show = true;
        this.firstName.setValue('');
        this.lastName.setValue('');
        this.email.setValue('');
        this.userName.setValue('');
        this.password.setValue('');
        return;
      } else {
        this.store.dispatch(
          SignUpAction.signUp({ authAccount: newAuthAccount })
        );
        this.signUp$.subscribe((data) => {
          if (data.status == 'Sign up success') {
            this.notification = data.status;
            this.status = 'success';
            this.show = true;
            this.firstName.setValue('');
            this.lastName.setValue('');
            this.email.setValue('');
            this.userName.setValue('');
            this.password.setValue('');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1500);
            return;
          }
        });
      }
    });
    return;
  }
}
