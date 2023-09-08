import { createAction, props } from '@ngrx/store';
import { Case } from 'src/app/models/case.model';

export const CaseAction = {
  addCase: createAction('[Case] Add Case', props<{ case: Case }>()),
  addCaseSuccess: createAction(
    '[Case] Add Case Success',
    props<{ case: Case }>()
  ),
  addCaseFailure: createAction(
    '[Case] Add Case Failure',
    props<{ error: any }>()
  ),

  getCases: createAction('[Case] Get Cases'),
  getCasesSuccess: createAction(
    '[Case] Get Cases Success',
    props<{ Cases: any[] }>()
  ),
  getCasesFailure: createAction(
    '[Case] Get Cases Failure',
    props<{ error: any }>()
  ),

  updateCase: createAction('[Case] Update Case', props<{Case: any }>()),
  updateCaseSuccess: createAction('[Case] Update Case Success'),
  updateCaseFailure: createAction(
    '[Case] Update Case Failure',
    props<{ error: any }>()
  ),

  deleteCase: createAction('[Case] Delete Case', props<{ id: string }>()),
  deleteCaseSuccess: createAction('[Case] Delete Case Success'),
  deleteCaseFailure: createAction(
    '[Case] Delete Case Failure',
    props<{ error: any }>()
  ),

  getCase: createAction('[Case] Get Case', props<{ id: string }>()),
  getCaseSuccess: createAction(
    '[Case] Get Case Success',
    props<{ case: any }>()
  ),
  getCaseFailure: createAction(
    '[Case] Get Case Failure',
    props<{ error: any }>()
  ),
};
