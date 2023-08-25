import { ChangeDetectionStrategy, Component } from '@angular/core';
import { field } from './model/field';
import {FormControl} from '@angular/forms';

import {NgModule} from '@angular/core';
import {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';

import { NgModel } from '@angular/forms';

const INCOME = {
  name: 'Income',
  items: [
      'Donations',
      'Product placement',
      'Sponsorship',
      'Found on the street',
      'Unexpected inheritance',
      'Investments',
      'Color copier',
  ],
};

const EXPENSES = {
  name: 'Expenses',
  items: [
      'Energy drinks',
      'Coffee',
      'Ramen',
      'Bills',
      'Back medicine',
      'Warhammer 40000 figurines',
  ],
};

@Component({
  selector: 'app-role-add-new',
  templateUrl: './role-add-new.component.html',
  styleUrls: ['./role-add-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleAddNewComponent {

  value = [];
 
  readonly items = [INCOME, EXPENSES];

  readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>
      items1.length === items2.length && items1.every(item => items2.includes(item));

  readonly valueContent: TuiStringHandler<TuiContextWithImplicit<readonly string[]>> =
      ({$implicit}) => {
          if (!$implicit.length) {
              return 'All';
          }

          const selected = this.items.find(({items}) =>
              this.identityMatcher($implicit, items),
          );

          return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
      };

  

  chooseAssignDirectly(){
    if(this.assignDirectly == false){
      this.useProfile = !this.useProfile
      this.assignDirectly = !this.assignDirectly
      
    }
    
  }

  chooseUseProfile(){
    if(this.useProfile == false){
      this.useProfile = !this.useProfile
      this.assignDirectly = !this.assignDirectly
    }
  }
      
  privilegeField = [
    'Inventory',
    'Marketing',
    'Projects',
    'Sales',
    'Help Desk',
  ];

  inventoryField = [
    'Invoices',
    'Price Books',
    'Products',
    'Purchase Orders',
    'Sale Orders',
    'Services',
    'Vendors',
  ]

  marketingField = [
    'Campaigns',
    'Campaign Emails',
    'Landing Pages',
    'Marketing List'
  ]

  projectsField = [
    'Project Milestones',
    'Project'
  ]

  salesField = [
    'Deals',
    'Forecast and Quota',
    'Quotes',
    'Sale Insights'
  ]

  helpDeskField = [
    'Assets',
    'Cases',
    'Chat Insights',
    'FAQ',
    'Help Desk Insights',
    'Internal Ticket Insights',
    'Internal Tickets',
    'Service Contracts',
    'Work Orders'
  ]
  // expanded = false;

  // inventoryToggle(): void {
  //   this.expanded = !this.expanded;
  // }
  // toggle() {}
  selectedGroup = false;
  useProfile = false;
  assignDirectly = true

  chooseSelectedGroup(){
    this.selectedGroup = true;
  }
  
  licenseType = "Standard";
  chooseLicense = "false";

  chosenLicenseType( type: string){
    this.licenseType = type;
  }

  optionBox:any = [];
  chosenUserType = false;
  chosenGroupType = false;
  userOption = "All Users";
  groupOption = "All Groups";
  chosenSelectedGroup = false;

  chosenUser( type: string){
    this.userOption = type;
    this.chosenUserType = true;
  }

  chosenGroup( type: string){
    this.groupOption = type;
    this.chosenGroupType = true;
    this.selectedGroup = false;
    // this.optionBox.length = 0;
  }

  chooseSelected( type:string){
    let flag = 0;
    for(let i of this.optionBox)
    {
      if (type == i){
        let index = this.optionBox.indexOf(type)
        this.optionBox.splice(index,1);
        flag = 1;
      }
    }
    if (flag==0){
      this.optionBox.push(type);
    }
    
  }
}
