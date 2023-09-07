export interface OrganizationState {
  organization: any | null;
  organizations: any[] | null;
  loading: boolean;
  status: string | null;
  error: any;
  isAlerted: boolean;
}