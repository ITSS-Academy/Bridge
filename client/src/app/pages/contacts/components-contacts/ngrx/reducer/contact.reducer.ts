import { createReducer, on } from "@ngrx/store";
import { ContactState } from "../state/contact.state";
import { ContactAction } from "../action/contact.action"


const initialState: ContactState = {
    contact: null,
    contacts: [],
    loading: false,
    status: null,
    error: ''
}

export const leadReducer = createReducer(
    initialState,
    // Add Lead
    on(ContactAction.addContact, (state, action) => {
        return {
            ...state,
            contact: action.contact,
            loading: true,
            status: "Adding contact...",
            error: ''
        }
    }),
    on(ContactAction.addContactSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            lead: action.contact,
            status: "Add contact success",
            error: ''
        }
    }),
    on(ContactAction.addContactFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Add contact failure",
            error: action.error
        }
    }),


    // Get Leads
    on(ContactAction.getContacts, (state) => {
        return {
            ...state,
            loading: true,
            status: "Getting contacts...",
            error: ''
        }
    }),
    on(ContactAction.getContactsSuccess, (state, action) => {
        return {
            ...state,
            contacts: action.contacts,
            loading: false,
            status: "Get contacts success",
            error: ''
        }
    }),
    on(ContactAction.getContactsFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get contacts failure",
            error: action.error
        }
    }),

    // Update Contact
    on(ContactAction.updateContact, (state, action) => {
        return {
            ...state,
            contact: action.contact,
            loading: true,
            status: "Updating contact...",
            error: ''
        }
    }),
    on(ContactAction.updateContactSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Update contact success",
            error: ''
        }
    }),
    on(ContactAction.updateContactFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Update contact failure",
            error: action.error
        }
    }),

    // Delete Contact
    on(ContactAction.deleteContact, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Deleting contact...",
            error: ''
        }
    }),
    on(ContactAction.deleteContactSuccess, (state) => {
        return {
            ...state,
            loading: false,
            status: "Delete contact success",
            error: ''
        }
    }),
    on(ContactAction.deleteContactFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Delete contact failure",
            error: action.error
        }
    }),

    // Get Contact
    on(ContactAction.getContact, (state, action) => {
        return {
            ...state,
            loading: true,
            status: "Getting contact...",
            error: ''
        }
    }),
    on(ContactAction.getContactSuccess, (state, action) => {
        return {
            ...state,
            contact: action.contact,
            loading: false,
            status: "Get contact success",
            error: ''
        }
    }),
    on(ContactAction.getContactFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            status: "Get contact failure",
            error: action.error
        }
    })
)