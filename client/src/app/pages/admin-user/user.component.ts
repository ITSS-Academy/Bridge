import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  User = [
    "User",
    "User Management",
  ]
  open = false;
 
  onClick(): void {
      this.open = !this.open;
  }

  onObscured(obscured: boolean): void {
      if (obscured) {
          this.open = false;
      }
  }

  onActiveZone(active: boolean): void {
      this.open = active && this.open;
  }

}
