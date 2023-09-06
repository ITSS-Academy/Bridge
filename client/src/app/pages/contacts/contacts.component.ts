import { ContactsService } from '../contacts/contact.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactState } from './components-contacts/ngrx/state/contact.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(public contactsService: ContactsService) {}
  contacts!: Observable<any>;
  subContacts: any[] = [];
  //ĐỔI TITLE THÀNH TÊN TRANG
  title = 'Contacts';
  pageEmpty = true;

  ngOnInit(): void {
    this.getAllContacts();
  }

  async getAllContacts() {
    this.contacts = (await this.contactsService.getAllContacts()).pipe(
      map((result: any) =>
        result.map((item: any) => {
          // console.log(item.data());
          return item.data().data;
        })
      )
    );
    // console.log(this.leads);    // console.log(result.docs.map((item: any) => item.data()));
  }
}
