import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.scss']
})
export class SecondNavbarComponent {
  @Input()
  title!: string;
  pageTitle: string = 'Leads';

  navPages = [
    {name: 'Leads', route: '/lead'},
    {name: 'Organizations', route: '/organization'},

  ]

  changeTitle(title: string): void {
    this.pageTitle = title;
  }

  constructor(public router: Router){}

  navigateToLeads(route: string){
    this.router.navigate([route]);
  }

  navigateToOrganiztions(){
    this.router.navigate(['/organizations']);
  }
}
