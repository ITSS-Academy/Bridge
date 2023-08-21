import { ChangeDetectionStrategy, Component } from '@angular/core';
import { field } from './model/field';
import {FormControl} from '@angular/forms';

import {NgModule} from '@angular/core';
import {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';


@Component({
  selector: 'app-role-add-new',
  templateUrl: './role-add-new.component.html',
  styleUrls: ['./role-add-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleAddNewComponent {

  selectedGroup = false;
  

  chooseSelectedGroup(){
    this.selectedGroup = !this.selectedGroup
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
}
