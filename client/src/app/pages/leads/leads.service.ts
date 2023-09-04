import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  token = '';
  core_api = 'https://server.bridge.io.vn/';
  collection = collection(this.firestore, 'leads');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  addLead(body: any) {
    return this.http.post(`http://localhost:3000/leads/createLead`, body) as Observable<any>;
  }

  async getAllLeads() {
    return collectionSnapshots(this.collection);
  }
}
