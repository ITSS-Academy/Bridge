import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {Observable, of, Subject} from 'rxjs';
import {delay, filter, startWith, switchMap} from 'rxjs/operators';

class User {
  constructor(
      readonly firstName: string,
      readonly avatarUrl: string | null = null,
  ) {}
  toString(): string {
    return `${this.firstName}`;
}

}
  const databaseMockData: readonly User[] = [
    new User('CEO',''),
    new User('VP of Sales'),
    new User('VP of Customer Service'),
    new User('Marketing Manager'),
    new User('Sales Manager'),
    new User('Support Manager'),
    new User('IT Consultant'),
];

@Component({
  selector: 'app-role-add-new',
  templateUrl: './role-add-new.component.html',
  styleUrls: ['./role-add-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleAddNewComponent {  
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

  readonly search$ = new Subject<string | null>();
 
  readonly items$: Observable<readonly User[] | null> = this.search$.pipe(
      filter(value => value !== null),
      switchMap(search =>
          this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),
      ),
      startWith(databaseMockData),
  );

  readonly testValue = new FormControl([]);

  onSearchChange(searchQuery: string | null): void {
      this.search$.next(searchQuery);
  }

  private serverRequest(searchQuery: string | null): Observable<readonly User[]> {
      const result = databaseMockData.filter(user =>
          TUI_DEFAULT_MATCHER(user, searchQuery || ''),
      );

      return of(result).pipe(delay(Math.random() * 1000 + 500));
  }
}

