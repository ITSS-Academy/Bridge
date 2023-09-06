import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  collection = collection(this.firestore, 'leads');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addLead(body: any) {
    return this.http.post(`${environment.API_URL}/leads/createLead`, body) as Observable<any>;
  }

  async getAllLeads() {
    return collectionSnapshots(this.collection);
  }

  getLeadById(id: string) {
    return this.http.get(`${environment.API_URL}/leads/${id}`) as Observable<any>;
  }

  updateLead(body: any) {
    return this.http.patch(`${environment.API_URL}/leads/update`, body) as Observable<any>;
  }

  deleteLead(id: string) {
    return this.http.delete(`${environment.API_URL}/leads/delete/${id}`) as Observable<any>;
  }
}
