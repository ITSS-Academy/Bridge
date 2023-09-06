import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  collection = collection(this.firestore, 'tasks');
  constructor(private http: HttpClient, private firestore: Firestore) {}
  //CRUD
  addTask(body: any) {
    return this.http.post(
      `${environment.API_URL}/tasks/createTask`,
      body
    ) as Observable<any>;
  }
  async getAllTask() {
    return collectionSnapshots(this.collection);
  }
  getTaskById(id: string) {
    return this.http.get(
      `${environment.API_URL}/tasks/${id}`
    ) as Observable<any>;
  }
  updateTask(body: any) {
    return this.http.patch(
      `${environment.API_URL}/tasks/update`,
      body
    ) as Observable<any>;
  }
  deleteTask(id: string) {
    return this.http.delete(
      `${environment.API_URL}/tasks/delete/${id}`
    ) as Observable<any>;
  }
}
