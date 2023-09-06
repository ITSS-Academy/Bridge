import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CasesService {
  collection = collection(this.firestore, 'cases');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addCase(body: any) {
    return this.http.post(`${environment.API_URL}/cases/createCase`, body) as Observable<any>;
  }

  async getAllCases() {
    return collectionSnapshots(this.collection);
  }

  getCaseById(id: string) {
    return this.http.get(`${environment.API_URL}/cases/${id}`) as Observable<any>;
  }

  updateCase(id: string, body: any) {
    return this.http.patch(`${environment.API_URL}/cases/${id}`, body) as Observable<any>;
  }

  deleteCase(id: string) {
    return this.http.delete(`${environment.API_URL}/cases/delete/${id}`) as Observable<any>;
  }
}
