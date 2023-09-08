import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DealsService {
  collection = collection(this.firestore, 'deals');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addDeal(body: any) {
    return this.http.post(`${environment.API_URL}/deals/createDeal`, body) as Observable<any>;
  }

  async getAllDeals() {
    return collectionSnapshots(this.collection);
  }

  getDealById(id: string) {
    return this.http.get(`${environment.API_URL}/deals/${id}`) as Observable<any>;
  }

  updateDeal(id: string, body: any) {
    return this.http.patch(`${environment.API_URL}/deals/${id}`, body) as Observable<any>;
  }

  deleteDeal(id: string) {
    return this.http.delete(`${environment.API_URL}/deals/delete/${id}`) as Observable<any>;
  }
}
