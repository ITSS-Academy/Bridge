import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  token = '';
  api_url = this.configService.get<string>('CORE_APIs');

  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {
    console.log('token service ' + this.api_url);
  }

  getToken() {
    let result = this.http
      .post(`${this.api_url}/Api/access_token`, {
        grant_type: 'client_credentials',
        client_id: '4def8f38-2c52-754b-a5fe-64ed9269eeaf',
        client_secret: '123',
      })
      .pipe(map((response) => response.data));
    result.subscribe(async (data) => {
      // this.token = await data.access_token;
      // console.log(this.token);
    });
    return result;
  }
}
