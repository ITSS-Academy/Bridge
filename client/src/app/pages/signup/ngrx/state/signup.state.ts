import { AuthAccount } from "src/app/models/auth-account.model";

export interface SignUpState {
    authAccount: AuthAccount | null;
    loading: boolean;
    status: string | null;
    error: any;
}
