import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  currentUser: any

  getCurrentUser(id: string){
    let result = this.http.get(`http://localhost:3000/users/findById/${id}`);
    result.subscribe(data => {
      this.currentUser = data;
    })
    return result;
  }
}
