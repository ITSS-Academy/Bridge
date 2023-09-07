import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  collection = collection(this.firestore, 'contacts');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addContact(body: any) {
    return this.http.post(`${environment.API_URL}/contacts/createContact`, body) as Observable<any>;
  }


  getAllContactsNgRx() {
    return collectionSnapshots(this.collection).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data();
        })
      )
    );
  }
  


  async getAllContacts() {
    return collectionSnapshots(this.collection);
  }

  getContactById(id: string) {
    return this.http.get(`${environment.API_URL}/contacts/${id}`) as Observable<any>;
  }

  updateContact(body: any) {
    return this.http.patch(`${environment.API_URL}/contacts/update`, body) as Observable<any>;
  }

  deleteContact(id: string) {
    return this.http.delete(`${environment.API_URL}/contacts/delete/${id}`) as Observable<any>;
  }
}
