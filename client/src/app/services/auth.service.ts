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

  getCurrentUser(email: string){
    let result = this.http.get(`http://localhost:3000/users/findByEmail/${email}`) as Observable<any>;
    const subscription:any = result.subscribe({
      next: (data) => {
        console.log(data)
        this.currentUser = data
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      },
      complete: () => subscription.unsubscribe(),
    })
    return result;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
