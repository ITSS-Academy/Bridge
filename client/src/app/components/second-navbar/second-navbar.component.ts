import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.scss']
})
export class SecondNavbarComponent implements OnInit {
  @Input()
  title!: string;
  currentUser:any

  navPages = [
    {name: 'Leads', route: '/lead'},
    {name: 'Contacts', route: '/contacts'},
    {name: 'Organizations', route: '/organization'},
    {name: 'Tasks', route: '/tasks'},
    {name: 'Cases', route: '/cases'},
    {name: 'Deals', route: '/deals'},

  ]

  constructor(public router: Router,public authService: AuthService){}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    console.log(this.currentUser.data)
    // console.log(this.currentUser.data.attributes.photo)
  }

  navigateToLeads(route: string){
    this.router.navigate([route]);
  }

}
