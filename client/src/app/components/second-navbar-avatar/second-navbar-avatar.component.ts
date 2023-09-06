import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-second-navbar-avatar',
  templateUrl: './second-navbar-avatar.component.html',
  styleUrls: ['./second-navbar-avatar.component.scss'],
})
export class SecondNavbarAvatarComponent {

  
  toggleDropdown() {
    const toggledDropdown = document.getElementById('avatar');
    const dropdownBox = document.getElementById('dropdownBox');
    if (toggledDropdown) {
      toggledDropdown.classList.toggle('open');
      dropdownBox?.classList.toggle('closed');
    }
  }
  constructor(public route: Router, private authService: AuthService) {}

  navToAdmin() {
    this.route.navigate(['/admin-users']);
  }

  logOut() {
    this.authService.logout();
    this.route.navigate(['/login']);
  }
}
