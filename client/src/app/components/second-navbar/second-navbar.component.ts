import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  styleUrls: ['./second-navbar.component.scss'],
})
export class SecondNavbarComponent implements OnInit {
  @Input()
  title!: string;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);
  }
  currentUser: any;

  constructor(public route: Router) {  
    if (this.navPages.length > 10) {
      this.navPages.length = 10;
    }
  }

  navTo(path: string) {
    this.route.navigate([`/${path}`]);
  }
  navPages: bookmark[] = [
    { name: 'Leads', route: '/leads'},
    { name: 'Contacts', route: '/contacts' },
    { name: 'Organizations', route: '/organizations' },
    { name: 'Tasks', route: '/tasks' },
    { name: 'Cases', route: '/cases' },
    { name: 'Deals', route: '/deals' },
    { name: 'Events', route: '/events' },
    { name: 'Dashboard', route: '/dashboard' },
  ];
  content?: table[];

  navigateTo(page: bookmark) {
    if (page.route != null) {
      this.route.navigate([page.route]);
    }
  }

  showSideBarFlag = false;
  empty = true;
  showSideBar() {
    const toggledOption = document.getElementById('sidebar');
    if (toggledOption) {
      toggledOption.classList.toggle('open');
    }
    const toggledOption2 = document.getElementById('title');
    if (toggledOption2) {
      toggledOption2.classList.toggle('open');
    }
    this.showSideBarFlag = !this.showSideBarFlag;
    if (!this.showSideBarFlag) {
      this.content = [];
      this.empty = true;
    }
  }
}
