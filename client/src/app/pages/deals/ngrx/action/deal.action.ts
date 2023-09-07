import { createAction, props } from '@ngrx/store';
import { Deal } from 'src/app/models/deal.model';

export const DealAction = {
  addDeal: createAction('[Deal] Add Deal', props<{ deal: Deal }>()),
  addDealSuccess: createAction(
    '[Deal] Add Deal Success',
    props<{ deal: Deal }>()
  ),
  addDealFailure: createAction(
    '[Deal] Add Deal Failure',
    props<{ error: any }>()
  ),

  getDeals: createAction('[Deal] Get Deals'),
  getDealsSuccess: createAction(
    '[Deal] Get Deals Success',
    props<{ deals: any[] }>()
  ),
  getDealsFailure: createAction(
    '[Deal] Get Deals Failure',
    props<{ error: any }>()
  ),

  updateDeal: createAction(
    '[Deal] Update Deal',
    props<{ deal: any }>()
  ),
  updateDealSuccess: createAction('[Deal] Update Deal Success'),
  updateDealFailure: createAction(
    '[Deal] Update Deal Failure',
    props<{ error: any }>()
  ),

  deleteDeal: createAction(
    '[Deal] Delete Deal',
    props<{ id: string }>()
  ),
  deleteDealSuccess: createAction('[Deal] Delete Deal Success'),
  deleteDealFailure: createAction(
    '[Deal] Delete Deal Failure',
    props<{ error: any }>()
  ),

  getDeal: createAction('[Deal] Get Deal', props<{ id: string }>()),
  getDealSuccess: createAction(
    '[Deal] Get Deal Success',
    props<{ deal: any }>()
  ),
  getDealFailure: createAction(
    '[Deal] Get Deal Failure',
    props<{ error: any }>()
  ),
};
