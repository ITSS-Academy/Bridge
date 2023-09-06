import { createReducer, on } from "@ngrx/store";
import { CaseState } from "../state/case.state";
import { CaseAction } from "../action/case.action"


const initialState: CaseState = {
    case: null,
    cases: [],
    loading: false,
    status: null,
    error: ''
}

export const caseReducer = createReducer(
    initialState,
    // Add Case
    on(CaseAction.addCase, (state, action) => {
        return {
            ...state,
            case: action.case,
            loading: true,
            status: "Adding case...",
            error: ''
        }
    }),
    on(CaseAction.addCaseSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            case: action.case,
            status: "Add case success",
            error: ''
        }
    }),
    on(CaseAction.addCaseFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Add case failure",
            error: action.error
        }
    }),


    // Get Cases
    on(CaseAction.getCases, (state) => {
        return {
            ...state,
            loading: true,
            status: "Getting cases...",
            error: ''
        }
    }),
    on(CaseAction.getCasesSuccess, (state, action) => {
        return {
            ...state,
            cases: action.cases,
            loading: false,
            status: "Get cases success",
            error: ''
        }
    }),
    on(CaseAction.getCasesFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get casets failure",
            error: action.error
        }
    }),

    // Update Case
    on(CaseAction.updateCase, (state, action) => {
        return {
            ...state,
            case: action.case,
            loading: true,
            status: "Updating case...",
            error: ''
        }
    }),
    on(CaseAction.updateCaseSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Update case success",
            error: ''
        }
    }),
    on(CaseAction.updateCaseFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Update case failure",
            error: action.error
        }
    }),

    // Delete Case
    on(CaseAction.deleteCase, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Deleting case...",
            error: ''
        }
    }),
    on(CaseAction.deleteCaseSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Delete case success",
            error: ''
        }
    }),
    on(CaseAction.deleteCaseFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Delete case failure",
            error: action.error
        }
    }),

    // Get Case
    on(CaseAction.getCase, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Getting case...",
            error: ''
        }
    }),
    on(CaseAction.getCaseSuccess, (state, action) => {
        return {
            ...state,
            case: action.case,
            loading: false,
            status: "Get case success",
            error: ''
        }
    }),
    on(CaseAction.getCaseFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get case failure",
            error: action.error
        }
    })
)