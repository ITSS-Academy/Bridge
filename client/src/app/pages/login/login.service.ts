import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { LoginAccount } from 'src/app/models/login-account.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  

  checkAuth(loginAccount: LoginAccount){
    return this.http.post('http://localhost:3000/auth/checkAuth', loginAccount, {observe: "body"}) as Observable<boolean>;
  }

  login(loginAccount: LoginAccount) {
    return this.http.post('http://localhost:3000/auth/login', loginAccount, {observe: "body"}) as Observable<AuthAccount>;
}

}
