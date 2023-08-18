import { Component,ChangeDetectionStrategy } from '@angular/core';
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
        dropdown.classList.remove('open'); // Close other dropdowns
      }
    });

    const toggledDropdown = document.getElementById(dropdownId);
    if (toggledDropdown) {
      toggledDropdown.classList.toggle('open'); // Toggle the open class
    }
  }
}
