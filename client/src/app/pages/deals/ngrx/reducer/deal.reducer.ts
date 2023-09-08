import { createReducer, on } from "@ngrx/store";
import { DealState } from "../state/deal.state";
import { DealAction } from "../action/deal.action"


const initialState: DealState = {
    deal: null,
    deals: [],
    loading: false,
    status: null,
    error: ''
}

export const dealReducer = createReducer(
    initialState,
    // Add Lead
    on(DealAction.addDeal, (state, action) => {
        return {
            ...state,
            deal: action.deal,
            loading: true,
            status: "Adding deal...",
            error: ''
        }
    }),
    on(DealAction.addDealSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            deal: action.deal,
            status: "Add contact success",
            error: ''
        }
    }),
    on(DealAction.addDealFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Add Deal failure",
            error: action.error
        }
    }),


    // Get Leads
    on(DealAction.getDeals, (state) => {
        return {
            ...state,
            loading: true,
            status: "Getting Deals...",
            error: ''
        }
    }),
    on(DealAction.getDealsSuccess, (state, action) => {
        return {
            ...state,
            deals: action.deals,
            loading: false,
            status: "Get Deals success",
            error: ''
        }
    }),
    on(DealAction.getDealsFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get deals failure",
            error: action.error
        }
    }),

    // Update Deal
    on(DealAction.updateDeal, (state, action) => {
        return {
            ...state,
            deal: action.deal,
            loading: true,
            status: "Updating deal...",
            error: ''
        }
    }),
    on(DealAction.updateDealSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Update deal success",
            error: ''
        }
    }),
    on(DealAction.updateDealFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Update deal failure",
            error: action.error
        }
    }),

    // Delete Deal
    on(DealAction.deleteDeal, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Deleting deal...",
            error: ''
        }
    }),
    on(DealAction.deleteDealSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Delete deal success",
            error: ''
        }
    }),
    on(DealAction.deleteDealFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Delete deal failure",
            error: action.error
        }
    }),

    // Get Deal
    on(DealAction.getDeal, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Getting deal...",
            error: ''
        }
    }),
    on(DealAction.getDealSuccess, (state, action) => {
        return {
            ...state,
            deal: action.deal,
            loading: false,
            status: "Get deal success",
            error: ''
        }
    }),
    on(DealAction.getDealFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get deal failure",
            error: action.error
        }
    })
)