import { Component,Input, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface field {
  readonly name?: string;
  readonly path?: string;
}

interface table {
  readonly name?: string;
  readonly field?: readonly field[];
}

interface content {
  readonly name: string;
  readonly id: table[];
}

interface bookmark {
  readonly name: string;
  readonly route?: string;
}


@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.scss']

})
export class SecondNavbarComponent {
  @Input()
    
  title!: string;
  constructor(public route: Router) {
    if (this.navPages.length>10){
      this.navPages.length = 10
    }
  }

  navPages:bookmark[] = [
    {name: 'Leads', route: '/leads'},
    {name: 'Contacts', route: '/contacts'},
    {name: 'Organizations', route: '/organizations'},
    {name: 'Tasks', route: '/tasks'},
    {name: 'Cases', route: '/cases'},
    {name: 'Deals', route: '/deals'},
  ]
  content?: table[];
  
  navigateTo(route: any){
    if (route !=null){
    this.route.navigate([route]);

    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.remove('chosen');
      this.content = [];
      this.empty = true
    }
  }
  }

  showSideBarFlag = false;
  empty = true;
  showSideBar() {
    const toggledOption = document.getElementById("sidebar");
    if (toggledOption) {
      toggledOption.classList.toggle('open');
    }
    const toggledOption2 = document.getElementById("title");
    if (toggledOption2) {
      toggledOption2.classList.toggle('open');
    }
    this.showSideBarFlag = !this.showSideBarFlag;
    if (!this.showSideBarFlag){
      this.content = []
      this.empty = true
    }
  }
  
  navTo(path: any) {
    this.route.navigate([`/${path}`]);
  }

  // 
}
