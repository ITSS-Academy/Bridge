import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  collection = collection(this.firestore, 'leads');

  constructor(private http: HttpClient, private firestore: Firestore) {}

  currentUser: any;

  getCurrentUser(email: string) {
    let result = this.http.get(
      `http://localhost:3000/users/findByEmail/${email}`
    ) as Observable<any>;
    const subscription: any = result.subscribe({
      next: (data) => {
        console.log(data);
        this.currentUser = data;
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      },
      complete: () => subscription.unsubscribe(),
    });
    return result;
  }

  async getAllUsers() {
    return collectionSnapshots(this.collection);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
