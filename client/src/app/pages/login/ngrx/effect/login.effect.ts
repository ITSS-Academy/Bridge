import { switchMap, catchError, map, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../../login.service";
import { LoginAction } from '../action/login.action';


@Injectable()
export class LoginEffect{
    constructor(private action$: Actions, private loginService: LoginService){}


    login$ = createEffect(() => 
        this.action$.pipe(
            ofType(LoginAction.login),
            switchMap((account: any) => this.loginService.login(account.loginAccount)),
            map((account:any ) => {
                return LoginAction.loginSuccess({ authAccount: account });
            }),
            catchError((error) => {
                return of(LoginAction.loginFailure({ error: error }));
            })
        ))
}