import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit{

  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Organizations';
  pageEmpty = true;

  organizations!: Observable<any>;
  subOrganizations: any[] = [];

  constructor(private organizationService: OrganizationsService) {
  }

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  async getAllOrganizations() {
    this.organizations = (await this.organizationService.getAllOrganizations()).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data().data;
        })
      )
    );
  }
}
