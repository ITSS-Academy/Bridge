import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationState } from '../ngrx/state/organization.state';
import { OrganizationAction } from '../ngrx/action/organization.action';
import { Store } from '@ngrx/store';
import { OrganizationsService } from '../organizations.service';
@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss']
})
export class PageWContentComponent {

  constructor(
    public organizationService: OrganizationsService,private store: Store<{ organization: OrganizationState }>, 
    ) {
  }

  @Input()
  organizations!: Observable<any>;
  organization$!: Observable<OrganizationState>;

  deleteOrganization(id: string) {
    this.store.dispatch(OrganizationAction.deleteOrganization({ id: id}));
  }


}
