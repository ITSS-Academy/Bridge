import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { TokenService } from 'src/token/token.service';
import { map } from 'rxjs';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class OrganizationsService {
  api_url = this.configService.get<string>('CORE_APIs');
  token = '';
  db = getFirestore();
  docRef = this.db.collection('organizations');

  constructor(
    private http: HttpService,
    private configService: ConfigService,
    private tokenService: TokenService,
  ) {
    let result = this.tokenService.getToken();
    result.subscribe((res) => {
      this.token = res.access_token;
    });
  }

  create(body: any) {
    let result = this.http
      .post(`${this.api_url}/Api/V8/module`, body, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .pipe(map((response) => response.data));
    return result.pipe(
      map(async (res) => {
        console.log(res)
        await this.docRef.add(res);
        return res;
      }),
    );
  }

  async findAll() {
    try {
      const snapshot = await this.docRef.get();
      const organizations = snapshot.docs.map((doc) => doc.data().data);
      console.log(organizations);
      return organizations;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findOne(id: string) {
    try {
      let organization!: any;
      const orgRef = this.docRef.where('data.id', '==', id);
      await orgRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          organization = doc.data();
          console.log(organization);
        });
      });
      return organization;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async update(id: string, body: any) {
    let result = this.http
      .patch(`${this.api_url}/Api/V8/module`, body, {
        headers: {
          Authorization: `Bearer ${this.tokenService.token}`,
        },
      })
      .pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: async (res) => {
        const orgRef = this.docRef.where('data.id', '==', id);
        await orgRef.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.update({ ...res });
          });
        });
      },
      complete: () => subscription.unsubscribe(),
    });
    return result;
  }

  remove(id: string) {
    let result = this.http
      .delete(`${this.api_url}/Api/V8/module/Accounts/${id}`, {
        headers: {
          Authorization: `Bearer ${this.tokenService.token}`,
        },
      })
      .pipe(map((response) => response.data));

    const orgRef = this.docRef.where('data.id', '==', id);
    orgRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
        doc.ref.delete();
      });
    });
    return result;
  }
}
