import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrganizationAction } from "../action/organization.action";
import { Injectable } from "@angular/core";
import { OrganizationsService } from "../../organizations.service";
import { switchMap, map, catchError, of } from "rxjs";
import { or } from "firebase/firestore";

@Injectable()

export class OrganizationEffect {
  constructor(private action$: Actions, private organizationService: OrganizationsService){}


  addOrganization$ = createEffect(() => 
      this.action$.pipe(
          ofType(OrganizationAction.addOrganization),
          switchMap((organization: any) => this.organizationService.addOrganization(organization.organization)),
          map((organization:any ) => {
              return OrganizationAction.addOrganizationSuccess({organization: organization});
          }),
          catchError((error) => {
              return of(OrganizationAction.addOrganizationFailure({ error: error }));
          })
      ));

  deleteLead$ = createEffect(() =>
      this.action$.pipe(
          ofType(OrganizationAction.deleteOrganization),
          switchMap((id: any) => this.organizationService.deleteOrganization(id.id)),
          map(( ) => {
              return OrganizationAction.deleteOrganizationSuccess();
          }),
          catchError((error) => {
              return of(OrganizationAction.deleteOrganizationFailure({ error: error }));
          })
      )
  )

  updateLead$ = createEffect(() => 
      this.action$.pipe(
          ofType(OrganizationAction.updateOrganization),
          switchMap((organization: any) => this.organizationService.updateOrganization(organization. organization)),
          map((organization: any ) => {
              return OrganizationAction.updateOrganizationSuccess();
          }),
          catchError((error) => {
              return of(OrganizationAction.updateOrganizationFailure({ error: error }));
          })
      ));
  

}