import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { LoginState } from './ngrx/state/login.state';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { LoginAccount } from 'src/app/models/login-account.model';
import { LoginAction } from './ngrx/action/login.action';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.less'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  
  content = '';
  notification = '';
  status = '';
  show = false;
  login$!: Observable<LoginState>;
  currentUser: any;
  currentAccount!: AuthAccount;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private loginService: LoginService,
    private store: Store<{ login: LoginState }>,
    public router: Router,
    private notificationService: NotificationService,
        
  ) {
    this.login$ = store.select('login');

    this.myForm.addControl('userName', this.userName);
    this.myForm.addControl('password', this.password);
  }
  myForm: FormGroup = new FormGroup({});
  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  testForm = new FormGroup({
    testValue1: new FormControl(false),
  });

  login() {
    let account: LoginAccount = {
      username: this.myForm.controls['userName'].value,
      password: this.myForm.controls['password'].value,
    };
    if (account.username == '' || account.password == '') {
      this.content = 'Please enter username and password';
      this.notificationService.showWarning();
      return;
    }
    let check$ = this.loginService.checkAuth(account);
    check$.subscribe((data) => {
      if (data == false) {
        this.userName.setValue('');
        this.password.setValue('');
        this.content = 'Username or password is incorrect';
        this.notificationService.showError();
        return;
      } else {
        this.store.dispatch(LoginAction.login({ loginAccount: account }));
        this.login$.subscribe((data) => {
          if (data.status == 'Login success') {
            console.log(data.authAccount!.email)
            this.authService.getCurrentUser(data.authAccount!.email)
            this.userName.setValue('');
            this.password.setValue('');
            this.content = 'Login success';
            this.notificationService.showSuccess()
            // this.notification = 'Login success';
            // this.status = 'success';
            // this.show = true;
            // localStorage.removeItem('currentUser');
            // localStorage.setItem('currentUser', JSON.stringify(this.authService.currentUser));
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            },1400)
            return;
          }
        });
      }
    });
    // console.log(this.currentAccount);
    return;
  }
}
