import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
@Injectable()
export class TokenService {
    token = '';

    constructor(private http: HttpService) {

    }


    getToken() {
      let result = this.http.post('http://localhost:80/Api/access_token', {
        grant_type: 'client_credentials',
        client_id: '122458be-76cd-d8b8-db95-64afffe6bc59',
        client_secret: 'admin',
      }).pipe(map((response) => response.data));
      result.subscribe(async (data) => {
        // this.token = await data.access_token;
        // console.log(this.token);
      })
      return result;
    }

}
