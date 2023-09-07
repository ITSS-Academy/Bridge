import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-navbar',
  templateUrl: './first-navbar.component.html',
  styleUrls: ['./first-navbar.component.scss']
})
export class FirstNavbarComponent {

  constructor(private router: Router) { }


  navToAboutUs(){
    this.router.navigate(['about-us']);
  }

  navToContactUs(){
    this.router.navigate(['contact-us']);
  }

  navToLogin(){
    this.router.navigate(['login']);
  }

  navToSignUp(){
    this.router.navigate(['signup']);
  }
}
