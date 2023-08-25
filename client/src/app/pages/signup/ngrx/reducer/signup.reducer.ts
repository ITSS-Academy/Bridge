import { createReducer, on } from "@ngrx/store";
import { SignUpState } from "../state/signup.state";
import { SignUpAction } from "../action/signup.action";

const initialState: SignUpState = {
    authAccount: null,
    loading: false,
    error: ''
};



export const SignUpReducer = createReducer(
    initialState,
    on(SignUpAction.signUp, (state, action) => {
        // console.log(action.authAccount)
        return {
            ...state,
            authAccount: action.authAccount,
            loading: true,
            error: ''
        }
    }),
    
    on(SignUpAction.signUpSuccess, (state, action) => {
        // console.log(action.authAccount)
        return {
            ...state,
            authAccount: state.authAccount,
            loading: false,
            error: ''
        }
    }),
    on(SignUpAction.signUpFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error: error
        }
    })
)