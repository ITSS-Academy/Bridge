import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  collection = collection(this.firestore, 'events');
  constructor(private http: HttpClient, private firestore: Firestore) {}

  //CRUD
  addEvent(body: any) {
    return this.http.post(`${environment.API_URL}/events/createEvent`, body) as Observable<any>;
  }

  async getAllEvents() {
    return collectionSnapshots(this.collection);
  }


  getAllEventsNgRx() {
    return collectionSnapshots(this.collection).pipe(
      map((result: any) =>
        result.map((item: any) => {
          return item.data();
        })
      )
    );
  }


  getEventById(id: string) {
    return this.http.get(`${environment.API_URL}/events/${id}`) as Observable<any>;
  }

  updateEvent(body: any) {
    return this.http.patch(`${environment.API_URL}/events/update`, body) as Observable<any>;
  }

  deleteEvent(id: string) {
    return this.http.delete(`${environment.API_URL}/events/delete/${id}`) as Observable<any>;
  }
}
