import { Injectable } from "@angular/core";
import { SignupService } from "../../signup.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SignUpAction } from "../action/signup.action";
import { switchMap, map, catchError, of } from "rxjs";


@Injectable()
export class SignUpEffect{
    constructor(private action$: Actions, private signUpService: SignupService){}
    signUp$ = createEffect(() => 
        this.action$.pipe(
            ofType(SignUpAction.signUp),
            switchMap((account:any) => this.signUpService.signup(account.authAccount)),
            map((account:any) => {
                return SignUpAction.signUpSuccess({ authAccount: account });
            }),
            catchError((error) => {
                return of(SignUpAction.signUpFailure({ error: error.message }));
            }
        ))
    )
}