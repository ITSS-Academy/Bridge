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

  navPages = [
    {name: 'Leads', route: '/lead'},
    {name: 'Contacts', route: '/contacts'},
    {name: 'Organizations', route: '/organization'},

  ]

  constructor(public router: Router){}

  navigateToLeads(route: string){
    this.router.navigate([route]);
  }

}
