import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DealAction } from '../action/deal.action';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, of } from 'rxjs';
import { DealsService } from '../../deals.service';

@Injectable()
export class DealEffect {
  constructor(
    private action$: Actions,
    private DealService: DealsService
  ) {}

  addDeal$ = createEffect(() =>
    this.action$.pipe(
      ofType(DealAction.addDeal),
      switchMap((deal: any) =>
        this.DealService.addDeal(deal.deal)
      ),
      map((deal: any) => {
        return DealAction.addDealSuccess({ deal: deal });
      }),
      catchError((error) => {
        return of(DealAction.addDealFailure({ error: error }));
      })
    )
  );

  getAllDeals$ = createEffect(() =>
    this.action$.pipe(
      ofType(DealAction.getDeals),
      switchMap(() => this.DealService.getAllDealsNgRx()),
      map((deals: any) => {
        return DealAction.getDealsSuccess({ deals: deals });
      }),
      catchError((error) => {
        return of(DealAction.getDealsFailure({ error: error }));
      })
    ))


    updateDeal$ = createEffect(() =>
    this.action$.pipe(
      ofType(DealAction.updateDeal),
      switchMap((deal: any) => this.DealService.updateDeal(deal.deal)),
      map(() => {
        return DealAction.updateDealSuccess();
      }),
      catchError((error) => {
        return of(DealAction.updateDealFailure({ error: error }));
      })
    ))

  deleteDeal$ = createEffect(() =>
    this.action$.pipe(
      ofType(DealAction.deleteDeal),
      switchMap((id: any) => this.DealService.deleteDeal(id.id)),
      map(() => {
        return DealAction.deleteDealSuccess();
      }),
      catchError((error) => {
        return of(DealAction.deleteDealFailure({ error: error }));
      })
    )
  );
  // deleteLead$ = createEffect(() =>);
}
