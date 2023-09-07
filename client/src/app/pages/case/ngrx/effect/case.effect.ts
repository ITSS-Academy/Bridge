import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CaseAction } from "../action/case.action";
import { Injectable } from "@angular/core";
import { CasesService } from "../../case.service";
import { switchMap, map, catchError, of } from "rxjs";

@Injectable()
export class CaseEffect {
    constructor(private action$: Actions, private caseService: CasesService){}


    addCase$ = createEffect(() => 
        this.action$.pipe(
            ofType(CaseAction.addCase),
            switchMap((Case: any) => this.caseService.addCase(Case.case)),
            map((Case:any ) => {
                return CaseAction.addCaseSuccess({case: Case});
            }),
            catchError((error) => {
                return of(CaseAction.addCaseFailure({ error: error }));
            })
        ));

    deleteCase$ = createEffect(() =>
        this.action$.pipe(
            ofType(CaseAction.deleteCase),
            switchMap((id: any) => this.caseService.deleteCase(id.id)),
            map(( ) => {
                return CaseAction.deleteCaseSuccess();
            }),
            catchError((error) => {
                return of(CaseAction.deleteCaseFailure({ error: error }));
            })
        )
    )

    updateLead$ = createEffect(() => 
        this.action$.pipe(
            ofType(CaseAction.updateCase),
            switchMap((Case: any) => this.caseService.updateCase(Case.case)),
            map((Case:any ) => {
                return CaseAction.updateCaseSuccess();
            }),
            catchError((error) => {
                return of(CaseAction.updateCaseFailure({ error: error }));
            })
        ));
    

}