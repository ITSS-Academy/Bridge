import { catchError } from 'rxjs';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthAccount } from 'src/app/models/auth-account.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {

  }


  checkExisted(authAccount: AuthAccount) {
    return this.http.post('http://localhost:3000/auth/checkUsername',authAccount, {observe: "body"}) as Observable<boolean>;
  }

    signup(authAccount: AuthAccount) {
        return this.http.post('http://localhost:3000/auth/signup', authAccount, {observe: "body"}) as Observable<AuthAccount>;

    }

}
