import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, mongo } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from 'src/token/token.service';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { User } from './schema/user.schema';
import { ConfigService } from '@nestjs/config';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { AuthAccountService } from 'src/auth-accounts/auth-accounts.service';

@Injectable()
export class UsersService {
  token = '';
  api_url = this.configService.get<string>('CORE_APIs');
  db = getFirestore();
  docRef = this.db.collection('users');

  constructor(
    @InjectModel(User.name) public userModel: Model<User>,
    public tokenService: TokenService,
    public http: HttpService,
    private configService: ConfigService,
  ) {}

  async createUser(body: any, token: string) {
    let result = this.http
      .post(`${this.api_url}/Api/V8/module`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: async (res) => {
        return await this.docRef.add({ ...res });
      },
      complete: () => subscription.unsubscribe(),
    });
    return result;
  }

  async findAllUsers() {
    try {
      const snapshot = await this.docRef.get();
      const users = snapshot.docs.map((doc) => doc.data());
      return users;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findUserByEmail(email: string) {
    try {
      let user!: any;
      const userRef = this.docRef.where('data.attributes.email1', '==', email);
      await userRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          user = doc.data();
          console.log(user);
        });
      });
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findOneUser(id: string) {
    try {
      let user!: any;
      const userRef = this.docRef.where('data.id', '==', id);
      await userRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          user = doc.data();
          console.log(user);
        });
      });
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async update(id: string, body: any) {
    console.log(body);
    console.log(id);
    console.log(this.tokenService.token);
    let result = this.http
      .patch(`${this.api_url}/Api/V8/module`, body, {
        headers: {
          Authorization: `Bearer ${this.tokenService.token}`,
        },
      })
      .pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: async (res) => {
        const userRef = this.docRef.where('data.id', '==', id);
        await userRef.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.update({ ...res });
          });
        });
      },
      complete: () => subscription.unsubscribe(),
    });
    return result;
  }

  async remove(id: string) {

    const userRef = this.docRef.where('data.id', '==', id);
    await userRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
    return this.http
    .delete(`${this.api_url}/Api/V8/module/Users/${id}`, {
      headers: {
        Authorization: `Bearer ${this.tokenService.token}`,
      },
    })
    .pipe(map((response) => response.data));
  }
}
