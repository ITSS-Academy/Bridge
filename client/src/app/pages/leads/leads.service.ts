import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionChanges,
  collectionSnapshots,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  token = '';
  core_api = 'https://server.bridge.io.vn/';
  leads = collection(this.firestore, 'leads');

  constructor(private http: HttpClient, private firestore: Firestore) {
    // this.getAllLeads();
  }

  async addLead(body: any) {
    return this.http
      .post(`http://localhost:3000/leads/createLead`, body)
      .pipe(map((res: any) => res.data)) as Observable<any>;
  }

  getAllLeads() {
    return collectionChanges(query(this.leads) as any);
  }
}
