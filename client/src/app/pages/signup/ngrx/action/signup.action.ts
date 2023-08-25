import { createAction, props } from "@ngrx/store";
import { AuthAccount } from "src/app/models/auth-account.model";

export const SignUpAction = {
    signUp: createAction('[SignUp] Sign Up', props<{authAccount: AuthAccount}>()),
    signUpSuccess: createAction('[SignUp] Sign Up Success', props<{authAccount: AuthAccount}>()),
    signUpFailure: createAction('[SignUp] Sign Up Failure', props<{error: any}>())
}