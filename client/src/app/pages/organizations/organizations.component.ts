import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Observable, Subscription, map } from 'rxjs';
import { OrganizationState } from './ngrx/state/organization.state';
import { Store } from '@ngrx/store';
import { OrganizationAction } from './ngrx/action/organization.action';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss'],
})
export class OrganizationsComponent implements OnInit {
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Organizations';
  pageEmpty = true;

  notification = '';
  status = '';
  show = false;

  subscription!: Subscription;

  organization$!: Observable<OrganizationState>;
  subOrganizations: any[] = [];

  constructor(private organizationService: OrganizationsService, private store: Store<{ organization: OrganizationState }>) {
    this.organization$ = store.select('organization');

  }

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  getAllOrganizations() {
    this.store.dispatch(OrganizationAction.getOrganizations());
  }
}
