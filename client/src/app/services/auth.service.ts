import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
  }

  currentUser: any

  getCurrentUser(id: string){
    let result = this.http.get(`http://localhost:3000/users/findById/${id}`) as Observable<any>;
    result.subscribe(data => {
      console.log(data)
      this.currentUser = data;
      console.log(this.currentUser)
    })
    return result;
  }
}
