import { createReducer, on } from '@ngrx/store';
import { OrganizationState } from '../state/organization.state';
import { OrganizationAction } from '../action/organization.action';

const initialState: OrganizationState = {
  organization: null,
  organizations: [],
  loading: false,
  status: null,
  error: '',
  isAlerted: false,
};

export const organizationReducer = createReducer(
  initialState,
  // Add Organization
  on(OrganizationAction.addOrganization, (state, action) => {
    return {
      ...state,
      organization: action.organization,
      loading: true,
      status: 'Adding organization...',
      error: '',
    };
  }),
  on(OrganizationAction.addOrganizationSuccess, (state, action) => {
      return {
          ...state,
          loading: false,
          organization: action.organization,
          status: "Add organization success",
          error: ''
      }
  }),
  on(OrganizationAction.addOrganizationFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Add organization failure',
      error: action.error,
    };
  }),

  // Get Organizations
  on(OrganizationAction.getOrganizations, (state) => {
    return {
      ...state,
      loading: true,
      status: 'Getting organizations...',
      error: '',
    };
  }),
  on(OrganizationAction.getOrganizationsSuccess, (state, action) => {
    return {
      ...state,
      organizations: action.organizations,
      loading: false,
      status: 'Get organizations success',
      error: '',
    };
  }),
  on(OrganizationAction.getOrganizationsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Get leads failure',
      error: action.error,
    };
  }),

  // Update Organization
  on(OrganizationAction.updateOrganization, (state, action) => {
      return {
          ...state,
          organization: action.organization,
          loading: true,
          status: "Updating organization...",
          error: ''
      }
  }),
  on(OrganizationAction.updateOrganizationSuccess, (state) => {
    return {
      ...state,
      loading: false,
      status: 'Update organization success',
      error: '',
      isAlerted: true,
    };
  }),
  on(OrganizationAction.updateOrganizationFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Update organization failure',
      error: action.error,
    };
  }),

  // Delete Organization
  on(OrganizationAction.deleteOrganization, (state, action) => {
        // state.loading = false;
      return {
          ...state,
          loading: true,
          status: "Deleting organization...",
          error: ''
      }
  }),
  on(OrganizationAction.deleteOrganizationSuccess, (state) => {
    return {
      ...state,
      loading: false,
      status: 'Delete organization success',
      error: '',
      isAlerted: true,
    };
  }),
  on(OrganizationAction.deleteOrganizationFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Delete onganization failure',
      error: action.error,
    };
  }),

  // Get Organization
  on(OrganizationAction.getOrganization, (state, action) => {
      return {
          ...state,
          loading: true,
          status: "Getting organizaiton...",
          error: ''
      }
  }),
  on(OrganizationAction.getOrganizationSuccess, (state, action) => {
      return {
          ...state,
          organization: action.organization,
          loading: false,
          status: "Get organization success",
          error: ''
      }
  }),
  on(OrganizationAction.getOrganizationFailure, (state, action) => {
      return {
          ...state,
          loading: false,
          status: "Get organization failure",
          error: action.error
      }
  })
);
