import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role-view2',
  templateUrl: './role-view2.component.html',
  styleUrls: ['./role-view2.component.scss']
})
export class RoleView2Component {
  constructor(public route:Router){}

  navigateToRoleAdd(){
    this.route.navigate(['/role-add-new']);
  }
}
