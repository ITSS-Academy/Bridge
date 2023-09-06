import { createAction, props } from "@ngrx/store";
import { Organization } from "src/app/models/organization.model";

export const OrganizationAction = {
  addOrganization: createAction('[Organization] Add Organization', props<{ organization: Organization}>()),
  addOrganizationSuccess: createAction('[Organization] Add Organization Success', props<{ organization: Organization}>()),
  addOrganizationFailure: createAction('[Organization] Add Organization Failure', props<{ error: any }>()),

  getOrganizations: createAction('[Organization] Get Organizations'),
  getOrganizationsSuccess: createAction('[Organization] Get Organizations Success', props<{ organizations: any[] }>()),
  getOrganizationsFailure: createAction('[Organization] Get Organizations Failure', props<{ error: any }>()),


  updateOrganization: createAction('[Organization] Update Organization', props<{ organization: any}>()),
  updateOrganizationSuccess: createAction('[Organization] Update Organization Success'),
  updateOrganizationFailure: createAction('[Organization] Update Organization Failure', props<{ error: any }>()),

  deleteOrganization: createAction('[Organization] Delete Organization', props<{ id: string}>()),
  deleteOrganizationSuccess: createAction('[Organization] Delete Organization Success'),
  deleteOrganizationFailure: createAction('[Organization] Delete Organization Failure', props<{ error: any }>()),

  getOrganization: createAction('[Organization] Get Organization', props<{ id: string}>()),
  getOrganizationSuccess: createAction('[Organization] Get Organization Success', props<{ organization: any }>()),
  getOrganizationFailure: createAction('[Organization] Get Organization Failure', props<{ error: any }>()),

  

}