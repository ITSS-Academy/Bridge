import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, mongo} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from 'src/token/token.service';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { User } from './schema/user.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  subUserInfo: any;
  api_url = this.configService.get<string>('CORE_APIs');

  constructor(@InjectModel(User.name) public userModel: Model<User>, 
  public tokenService: TokenService, 
  public http: HttpService,
  private configService: ConfigService) {
  }
  
  async createUser(body: any, token: string) {
    let result = this.http.post(`${this.api_url}/Api/V8/module`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: (res) => {
      // console.log(res);
      this.subUserInfo = this.userModel.create(res);
      return this.subUserInfo;
    },
    complete: () => subscription.unsubscribe(),
  })
    return result;
  }


  async findAllUsers() {
    let result = await this.userModel.find().exec();
    return result as User[];
  }

  async fineUserByEmail(email: string) {
    let result = await this.userModel.findOne({'data.attributes.email1': email}).exec();
    return result;
  }

  async findOneUser(id: string) {
    let result = await this.userModel.findOne({'_id': id}).exec();
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto, token: string) {
    let result = this.http.patch(`${this.api_url}/Api/V8/module/${id}`, updateUserDto, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(map((response) => response.data));
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
