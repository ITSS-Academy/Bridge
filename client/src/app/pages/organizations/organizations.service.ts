import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  collection = collection(this.firestore, 'organizations');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addOrganization(body: any) {
    return this.http.post(`${environment.API_URL}/organizations/createOrganization`, body) as Observable<any>;
  }


  getAllOrganizationsNgRx() {
    return collectionSnapshots(this.collection).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data();
        })
      )
    );
  }

  async getAllOrganizations() {
    return collectionSnapshots(this.collection);
  }

  getOrganizationById(id: string) {
    return this.http.get(`${environment.API_URL}/organizations/${id}`) as Observable<any>;
  }

  updateOrganization(body: any) {
    return this.http.patch(`${environment.API_URL}/organizations/update`, body) as Observable<any>;
  }

  deleteOrganization(id: string) {
    return this.http.delete(`${environment.API_URL}/organizations/delete/${id}`) as Observable<any>;
  }
}
