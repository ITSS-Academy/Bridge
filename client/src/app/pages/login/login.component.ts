import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { LoginState } from './ngrx/state/login.state';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { LoginAccount } from 'src/app/models/login-account.model';
import { LoginAction } from './ngrx/action/login.action';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { HttpClient } from '@angular/common/http';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.less'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  
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
    public router: Router
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
      this.notification = 'Please enter username and password';
      this.status = 'warning';
      this.show = true;
      return;
    }
    let check$ = this.loginService.checkAuth(account);
    check$.subscribe((data) => {
      if (data == false) {
        this.userName.setValue('');
        this.password.setValue('');
        this.notification = 'Username or password is incorrect';
        this.status = 'error';
        this.show = true;
        return;
      } else {
        this.store.dispatch(LoginAction.login({ loginAccount: account }));

        this.userName.setValue('');
        this.password.setValue('');
        this.notification = 'Login success';
        this.status = 'success';
        this.show = true;
      }
    });

    console.log('logged in');
    this.login$.subscribe((data) => {
      if (data.status == 'Login success') {
        let result = this.authService.getCurrentUser(data.authAccount!.id);
        console.log(data.authAccount!);
        result.subscribe((data) => {
          console.log(data);
        });
      }
    });
    // this.login$.subscribe((data) => {
    //   console.log(data);
    //   this.currentAccount = data.authAccount!;
    //   if (data.status == 'Login success') {
    //     let result = this.http
    //       .get(`http://localhost:3000/users/findById/${data.authAccount!.id}`);
    //       result.subscribe((data) => {
    //         console.log(data);
    //         this.currentUser = data;
    //         console.log(this.currentUser);
    //         setTimeout(() => {
    //           this.router.navigate(['/lead']);
    //         }, 1500);
    //       });
    //   }
    // });
    return;
  }
}
