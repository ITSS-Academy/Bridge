import { Component, Input } from '@angular/core';
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
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class AppSideBarComponent {
  @Input() favorites!: bookmark[];

  constructor(public route: Router) {
    // this.cloneList()
  }
  // tempList: bookmark[] = [];

  // cloneList() {
  //   for ( let i = 0; i < this.favorites.length; i++) {
  //     this.tempList[i] = this.favorites[i];
  //   }
  // }

  showSideBarFlag = true;
  empty = true;
  showSideBar() {
    this.showSideBarFlag = !this.showSideBarFlag;
    if (!this.showSideBarFlag) {
      this.content = [];
      this.empty = true;
    }
  }
  navTo(path: any) {
    this.route.navigate([`/${path}`]);
    // const sidebar = document.getElementById("sidebar");
    // if (sidebar) {
    //   sidebar.classList.remove('chosen');
    //   this.content = [];
    //   this.empty = true
    // }
  }

  //NỘI DUNG CỦA ESSENTIALS
  public leadContactManagement: field[] = [
    { name: 'Leads', path: 'leads' },
    { name: 'Contacts', path: 'contacts' },
    { name: 'Organizations', path: 'organizations' },
    { name: 'Find Duplicates' },
  ];

  public collaboration: field[] = [
    { name: 'Actions' },
    { name: 'Events' },
    { name: 'Tasks', path: 'tasks' },
    { name: 'Documents' },
    { name: 'Esigned Documents' },
    { name: 'Approvals' },
  ];

  public leadCapture: field[] = [{ name: 'Import' }];

  public conversations: field[] = [
    { name: 'Inbox' },
    { name: 'Phone Calls' },
    { name: 'Live Chats' },
    { name: 'SMS Messages' },
  ];

  public analytics: field[] = [{ name: 'Reports' }, { name: 'Dashboard' }];

  public others: field[] = [{ name: 'Olark Chart' }];
  //TỔNG HỢP ESSENTIALS
  public essentialsContent: table[] = [
    { name: 'Lead & Contact Management', field: this.leadContactManagement },
    { name: 'Collaboration', field: this.collaboration },
    { name: 'Lead Capture', field: this.leadCapture },
    { name: 'Conversations', field: this.conversations },
    { name: 'Analytics', field: this.analytics },
    { name: 'Others', field: this.others },
  ];

  //NỘI DUNG CỦA MARKETING
  public campaigns: field[] = [
    { name: 'Email Campaigns' },
    { name: 'Campaigns' },
  ];

  public M_leadContactManagement: field[] = [
    { name: 'Leads', path: 'leads' },
    { name: 'Contacts', path: 'contacts' },
    { name: 'Organizations', path: 'organizations' },
    { name: 'Find Duplicates' },
  ];

  public marketingPlanning: field[] = [{ name: 'Tasks', path: 'tasks' }];

  public marketingEnablement: field[] = [
    { name: 'Email Templates' },
    { name: 'SMS Templates' },
    { name: 'Documents' },
    { name: 'Landing Pages' },
  ];

  public M_leadCapture: field[] = [{ name: 'Imports' }];

  //TỔNG HỢP MARKETING
  public marketingContent: table[] = [
    { name: 'Campaigns', field: this.campaigns },
    { name: 'Lead & Contact Management', field: this.M_leadContactManagement },
    { name: 'Marketing Planning', field: this.marketingPlanning },
    { name: 'Marketing Enablement', field: this.marketingEnablement },
    { name: 'Lead Capture', field: this.M_leadCapture },
  ];

  public piepelineManagement: field[] = [
    { name: 'Deals', path: 'deals' },
    { name: 'Forecast and Quota' },
  ];

  public salesEngagement: field[] = [
    { name: 'Inbox' },
    { name: 'Live Chats' },
    { name: 'Quotes' },
  ];

  public salesAnalytics: field[] = [
    { name: 'Sale Insights' },
    { name: 'Sale Leaderboard' },
    { name: 'My Sale Dashboard' },
  ];

  public salesEnablement: field[] = [
    { name: 'Documents' },
    { name: 'Email Sequences' },
    { name: 'Emails Templates' },
    { name: 'Print Templates' },
    { name: 'Appointment Pages' },
  ];

  public salesContent: table[] = [
    { name: 'Pipeline Management', field: this.piepelineManagement },
    { name: 'Sales Engagement', field: this.salesEngagement },
    { name: 'Sales Analytics', field: this.salesAnalytics },
    { name: 'Sales Enablement', field: this.salesEnablement },
  ];

  public customerIssues: field[] = [
    { name: 'Cases', path: 'cases' },
    { name: 'Live Chats' },
  ];

  public agentEngagement: field[] = [
    { name: 'FAQ' },
    { name: 'Service Contract' },
    { name: 'Appoiment Pages' },
  ];

  public custometService: field[] = [
    { name: 'Help Desk Insights' },
    { name: 'Chat Insight' },
  ];

  public helpDeskContent: table[] = [
    { name: 'Customer Issues', field: this.customerIssues },
    { name: 'Agent Engagement', field: this.agentEngagement },
    { name: 'Customer Service', field: this.custometService },
  ];

  public projectManagement: field[] = [
    { name: 'Tasks', path: 'tasks' },
    { name: 'Project Management' },
    { name: 'Project' },
    { name: 'Project Tasks' },
  ];

  public projectEnablment: field[] = [{ name: 'Timelogs' }];

  public projectAnalytics: field[] = [{ name: 'Reports' }];

  public projectsContent: table[] = [
    { name: 'Project Management', field: this.projectManagement },
    { name: 'Project Enablement', field: this.projectEnablment },
    { name: 'Project Analytics', field: this.projectAnalytics },
  ];

  public catalog: field[] = [
    { name: 'Products' },
    { name: 'Service' },
    { name: 'Price Books' },
  ];

  public orderFufillment: field[] = [
    { name: 'Invoices' },
    { name: 'Sales Orders' },
    { name: 'Purchase Order' },
    { name: 'Vendors' },
  ];

  public inventoryTools: field[] = [
    { name: 'Print Template' },
    { name: 'Email Templates' },
    { name: 'Work Orders' },
    { name: 'Assets' },
  ];

  public inventoryContent: table[] = [
    { name: 'Catalog', field: this.catalog },
    { name: 'Order Enablement', field: this.orderFufillment },
    { name: 'Inventory Tools', field: this.inventoryTools },
  ];

  public internalIssues: field[] = [{ name: 'Internal Tickets' }];

  public agentEnablement: field[] = [{ name: 'FAQ' }, { name: 'Employee' }];

  public supportAnalytics: field[] = [{ name: 'Internal Tickets Insights' }];
  public serviceDeskContent: table[] = [
    { name: 'Internal Issues', field: this.internalIssues },
    { name: 'Agent Enablement', field: this.agentEnablement },
    { name: 'Support Analytics', field: this.supportAnalytics },
  ];

  public dataManagement: field[] = [
    { name: 'Imports' },
    { name: 'Find Duplicates' },
    { name: 'Recycle Bin' },
  ];

  public templates: field[] = [
    { name: 'Email Templates' },
    { name: 'Print Templates' },
  ];

  public productivityTools: field[] = [{ name: 'Appointment Pages' }];
  public toolsContent: table[] = [
    { name: 'Data Management', field: this.dataManagement },
    { name: 'Templates', field: this.templates },
    { name: 'Productivity Tools', field: this.productivityTools },
  ];

  public designer: field[] = [{ name: 'App Creator' }];
  public platformContent: table[] = [
    { name: 'Designer', field: this.designer },
  ];

  public sideBarField: content[] = [
    { name: 'Essentials', id: this.essentialsContent },
    { name: 'Marketing', id: this.marketingContent },
    { name: 'Sales', id: this.salesContent },
    { name: 'Help Desk', id: this.helpDeskContent },
    { name: 'Projects', id: this.projectsContent },
    { name: 'Inventory', id: this.inventoryContent },
    { name: 'Service Desk', id: this.serviceDeskContent },
    { name: 'Tools', id: this.toolsContent },
    { name: 'Platform', id: this.platformContent },
  ];

  content?: table[];
  choose(optionId: string, content: table[]) {
    const allOptions = document.querySelectorAll('.listField.button');

    allOptions.forEach((option) => {
      if (option.id != optionId) {
        option.classList.remove('chosen');
      }
    });

    const toggledOption = document.getElementById(optionId);
    if (toggledOption) {
      toggledOption.classList.add('chosen');
      this.content = content;
      this.empty = false;
    }
  }
  exampleForm = new FormGroup({
    exampleControl: new FormControl(''),
  });

  open = false;

  showDialog(): void {
    this.open = true;
  }

  dialogContent?: table[];
  dialogEmpty = true;

  chooseDialog(optionId: string, content: table[]){

    const allOptions = document.querySelectorAll('.dialogSelection.button');

    allOptions.forEach((option) => {
      if (option.id != `dialog_${optionId}`) {
        option.classList.remove('chosen');
      }
    });

    const toggledOption = document.getElementById(`dialog_${optionId}`);
    if (toggledOption) {
      toggledOption.classList.add('chosen');
      this.dialogContent = content;
      this.dialogEmpty = false;
    }
  }

  toggleFromList(module: any) {
    let flag = 0;

    for (let i of this.favorites) {
      if (module == i) {
        let index = this.favorites.indexOf(module);
        this.favorites.splice(index, 1);
        flag = 1;
      }
    }
    for (let i of this.favorites){
      if (module.name == i.name) {
        flag = 1;
      }
    }
    if (flag == 0 && this.favorites.length<10) {
      this.favorites.push(module);
    }
  }
}
