import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Observable, Subscription, map } from 'rxjs';
import { OrganizationState } from './ngrx/state/organization.state';
import { Store } from '@ngrx/store';

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

  organizations!: Observable<any>;
  organization$!: Observable<OrganizationState>;
  subOrganizations: any[] = [];

  constructor(
    private organizationService: OrganizationsService,
    private store: Store<{ organization: OrganizationState }>
  ) {
    this.organization$ = this.store.select('organization');
    this.subscription = this.organization$.subscribe({
      next: (data) => {
        console.log(data.status);
        if (data.status == 'Delete organization success') {
          this.notification = 'Delete successfully';
          this.status = 'success';
          this.show = data.isAlerted;
        } else if (data.status == 'Add organization success') {
          this.notification = 'Add successfully';
          this.status = 'success';
          this.show = data.isAlerted;
        } else if (data.status == 'Update organization success') {
          this.notification = 'Update successfully';
          this.status = 'success';
          this.show = data.isAlerted;
        }
      },
      complete: () => {
        this.subscription.unsubscribe();
      },
    });
  }

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  async getAllOrganizations() {
    this.organizations = (
      await this.organizationService.getAllOrganizations()
    ).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data();
        })
      )
    );
  }
}
