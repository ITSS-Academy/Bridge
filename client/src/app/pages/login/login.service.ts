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


  login(loginAccount: LoginAccount) {
    let result = this.http.post('http://localhost:3000/auth/login', loginAccount, {observe: "body"}) as Observable<AuthAccount>;
    return result.pipe(
        map((account: any) => {
            if(account.status == 401){
                console.log(account)
                throw new Error(account.message)
            }
            return account
          }),
        );
}

}
