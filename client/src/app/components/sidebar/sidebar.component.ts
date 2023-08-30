import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TUI_ARROW } from '@taiga-ui/kit';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
  
})
export class SidebarComponent {
  toggleDropdown(dropdownId: string) {
    const allDropdowns = document.querySelectorAll('.dropdown');

    allDropdowns.forEach((dropdown) => {
        if (dropdown.id !== dropdownId) {
            dropdown.classList.remove('open');
        }
    });

    const toggledDropdown = document.getElementById(dropdownId);
    if (toggledDropdown) {
        toggledDropdown.classList.toggle('open');
    }
}


  constructor(public route:Router){
    
  }

  navigateToUser(){
    this.route.navigate(['/admin-users'])
    
  }

  //ĐỔI TỪ ROLE-VIEW2 THÀNH ROLE-VIEW1 -VIỆT
  navigateToRole(){
    this.route.navigate(['/role-view1'])
  }

  navigateToGroups(){
    this.route.navigate(['/admin-groups'])
  }
}
