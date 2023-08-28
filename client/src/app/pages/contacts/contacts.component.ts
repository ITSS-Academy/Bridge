import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor(public contactsService: ContactsService) { }
  title = 'Contacts';
  pageEmpty = true;

  addTask(){
    this.pageEmpty = !this.pageEmpty
  }
}
