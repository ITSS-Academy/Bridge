import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  token = '';

  constructor(private http: HttpClient) {
    let result = this.http.post('http://localhost:3000/token/getToken', {}) as Observable<any>;
    result.subscribe((data) => {
      this.token = data['access_token'];
      // console.log(data['access_token']);
      console.log(this.token);
    })
  }
}
