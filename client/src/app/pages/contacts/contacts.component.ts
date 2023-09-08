import { ContactsService } from '../contacts/contact.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactState } from './components-contacts/ngrx/state/contact.state';
import { Store } from '@ngrx/store';
import { ContactAction } from './components-contacts/ngrx/action/contact.action';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(public contactsService: ContactsService, private store: Store<{contact: ContactState}>) {
    this.contacts$ = this.store.select('contact');
  }
  contacts$!: Observable<ContactState>;
  subContacts: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Contacts';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.store.dispatch(ContactAction.getContacts());
  }
}
