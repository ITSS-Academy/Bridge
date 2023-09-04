import { createAction, props } from "@ngrx/store";
import { Lead } from "src/app/models/lead.model";



export const LeadAction = {
    addLead: createAction('[Lead] Add Lead', props<{ lead: Lead}>()),
    addLeadSuccess: createAction('[Lead] Add Lead Success', props<{ lead: Lead}>()),
    addLeadFailure: createAction('[Lead] Add Lead Failure', props<{ error: any }>()),

    getLeads: createAction('[Lead] Get Leads'),
    getLeadsSuccess: createAction('[Lead] Get Leads Success', props<{ leads: any[] }>()),
    getLeadsFailure: createAction('[Lead] Get Leads Failure', props<{ error: any }>()),


    updateLead: createAction('[Lead] Update Lead', props<{ lead: any}>()),
    updateLeadSuccess: createAction('[Lead] Update Lead Success'),
    updateLeadFailure: createAction('[Lead] Update Lead Failure', props<{ error: any }>()),

    deleteLead: createAction('[Lead] Delete Lead', props<{ id: string}>()),
    deleteLeadSuccess: createAction('[Lead] Delete Lead Success'),
    deleteLeadFailure: createAction('[Lead] Delete Lead Failure', props<{ error: any }>()),

    getLead: createAction('[Lead] Get Lead', props<{ id: string}>()),
    getLeadSuccess: createAction('[Lead] Get Lead Success', props<{ lead: any }>()),
    getLeadFailure: createAction('[Lead] Get Lead Failure', props<{ error: any }>()),

    

}
