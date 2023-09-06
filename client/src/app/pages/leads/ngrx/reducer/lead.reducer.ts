import { createReducer, on } from "@ngrx/store";
import { LeadState } from "../state/lead.state";
import { LeadAction } from "../action/lead.action";


const initialState: LeadState = {
    lead: null,
    leads: [],
    loading: false,
    status: null,
    error: ''
}

export const leadReducer = createReducer(
    initialState,
    // Add Lead
    on(LeadAction.addLead, (state, action) => {
        return {
            ...state,
            lead: action.lead,
            loading: true,
            status: "Adding lead...",
            error: ''
        }
    }),
    on(LeadAction.addLeadSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            lead: action.lead,
            status: "Add lead success",
            error: ''
        }
    }),
    on(LeadAction.addLeadFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Add lead failure",
            error: action.error
        }
    }),


    // Get Leads
    on(LeadAction.getLeads, (state) => {
        return {
            ...state,
            loading: true,
            status: "Getting leads...",
            error: ''
        }
    }),
    on(LeadAction.getLeadsSuccess, (state, action) => {
        return {
            ...state,
            leads: action.leads,
            loading: false,
            status: "Get leads success",
            error: ''
        }
    }),
    on(LeadAction.getLeadsFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get leads failure",
            error: action.error
        }
    }),

    // Update Lead
    on(LeadAction.updateLead, (state, action) => {
        return {
            ...state,
            lead: action.lead,
            loading: true,
            status: "Updating lead...",
            error: ''
        }
    }),
    on(LeadAction.updateLeadSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Update lead success",
            error: ''
        }
    }),
    on(LeadAction.updateLeadFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Update lead failure",
            error: action.error
        }
    }),

    // Delete Lead
    on(LeadAction.deleteLead, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Deleting lead...",
            error: ''
        }
    }),
    on(LeadAction.deleteLeadSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Delete lead success",
            error: ''
        }
    }),
    on(LeadAction.deleteLeadFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Delete lead failure",
            error: action.error
        }
    }),

    // Get Lead
    on(LeadAction.getLead, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Getting lead...",
            error: ''
        }
    }),
    on(LeadAction.getLeadSuccess, (state, action) => {
        return {
            ...state,
            lead: action.lead,
            loading: false,
            status: "Get lead success",
            error: ''
        }
    }),
    on(LeadAction.getLeadFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get lead failure",
            error: action.error
        }
    })
)