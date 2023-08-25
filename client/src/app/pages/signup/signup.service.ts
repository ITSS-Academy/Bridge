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


    signup(authAccount: AuthAccount) {
        let result = this.http.post('http://localhost:3000/auth/signup', authAccount, {observe: "body"}) as Observable<AuthAccount>;
        return result.pipe(
            map((account: any) => {
                if(account.status == 302){
                    // console.log(account)
                    throw new Error(account.message)
                }
                return account}),
            );
    }

}
