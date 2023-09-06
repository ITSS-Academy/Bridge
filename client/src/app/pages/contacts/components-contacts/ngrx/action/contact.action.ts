import { createAction, props } from '@ngrx/store';
import { Contact } from 'src/app/models/contact.model';

export const ContactAction = {
  addContact: createAction('[Contact] Add Contact', props<{ contact: Contact }>()),
  addContactSuccess: createAction(
    '[Contact] Add Contact Success',
    props<{ contact: Contact }>()
  ),
  addContactFailure: createAction(
    '[Contact] Add Contact Failure',
    props<{ error: any }>()
  ),

  getContacts: createAction('[Contact] Get Contacts'),
  getContactsSuccess: createAction(
    '[Contact] Get Contacts Success',
    props<{ contacts: any[] }>()
  ),
  getContactsFailure: createAction(
    '[Contact] Get Contacts Failure',
    props<{ error: any }>()
  ),

  updateContact: createAction(
    '[Contact] Update Contact',
    props<{ contact: any }>()
  ),
  updateContactSuccess: createAction('[Contact] Update Contact Success'),
  updateContactFailure: createAction(
    '[Contact] Update Contact Failure',
    props<{ error: any }>()
  ),

  deleteContact: createAction(
    '[Contact] Delete Contact',
    props<{ id: string }>()
  ),
  deleteContactSuccess: createAction('[Contact] Delete Contact Success'),
  deleteContactFailure: createAction(
    '[Contact] Delete Contact Failure',
    props<{ error: any }>()
  ),

  getContact: createAction('[Contact] Get Contact', props<{ id: string }>()),
  getContactSuccess: createAction(
    '[Contact] Get Contact Success',
    props<{ contact: any }>()
  ),
  getContactFailure: createAction(
    '[Contact] Get Contact Failure',
    props<{ error: any }>()
  ),
};
