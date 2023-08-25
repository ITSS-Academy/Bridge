import { LoginAccount } from './../../../../models/login-account.model';
import { AuthAccount } from "src/app/models/auth-account.model";

export interface LoginState {
    // loginAccount: LoginAccount | null;
    authAccount: AuthAccount | null;
    loading: boolean;
    status: string | null
    error: any;
}
