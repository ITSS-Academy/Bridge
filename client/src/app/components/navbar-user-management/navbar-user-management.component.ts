import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user-management',
  templateUrl: './navbar-user-management.component.html',
  styleUrls: ['./navbar-user-management.component.scss']
})
export class NavbarUserManagementComponent {
  constructor(public route: Router){}

  @Input() tags!:string[]
  // @Input() tag2!: string
  backToUser(){
    this.route.navigate(['/user'])
  }
}
