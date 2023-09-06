import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface option{
  name: string;
  color: string;
}

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
  constructor(public route: Router) {
    // const status = document.getElementById("statusCircle")
    // status?.classList.add("online")
  }

  index = 0;
  optionBox:option[] = [{name: "Online",color:"online"},{name: "Busy",color:"busy"},{name: "Offline", color:""}]
  option:option=this.optionBox[this.index];
  
  changeStatus(){
    if(this.index<2){
      this.index ++
    } else {
      this.index =0
    }
    
    this.option = this.optionBox[this.index];
  }

  navToAdmin() {
    this.route.navigate(['/user']);
  }

  logOut() {}
}
