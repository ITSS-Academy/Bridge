import { createAction, props } from "@ngrx/store";
import { AuthAccount } from "src/app/models/auth-account.model";
import { LoginAccount } from "src/app/models/login-account.model";

export const LoginAction = {
    login: createAction('[Login] Login', props<{ loginAccount: LoginAccount}>()),
    loginSuccess: createAction('[Login] Login Success', props<{ authAccount: AuthAccount }>()),
    loginFailure: createAction('[Login] Login Failure', props<{ error: any }>())
}