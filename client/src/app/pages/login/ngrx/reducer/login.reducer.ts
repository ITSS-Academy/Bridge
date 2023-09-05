import { createReducer, on } from "@ngrx/store";
import { LoginState } from "../state/login.state";
import { LoginAction } from "../action/login.action";


const initialState: LoginState = {
    authAccount: null,
    loading: false,
    status: null,
    error: ''
}

export const loginReducer = createReducer(
    initialState,
    on(LoginAction.login, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Logging in...",
            error: ''
        }   
    }),
    on(LoginAction.loginSuccess, (state, action) => {
        // state = initialState
        return {
            ...state,
            authAccount: action.authAccount,
            loading: false,
            status: "Login success",
            error: ''
        }
    }),
    on(LoginAction.loginFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            status: 'Login failure',
            error: error
        }
    })
)