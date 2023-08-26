import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  data = false;
  clickAddData() {
    this.data = true;
  }
}
