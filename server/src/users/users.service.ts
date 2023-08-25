import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, mongo} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from 'src/token/token.service';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) public userModel: Model<User>, 
  public tokenService: TokenService, 
  public http: HttpService) {
  }
  
  createUser(body: any, token: string) {
    let result = this.http.post('http://localhost:80/Api/V8/module', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: (res) => {
      console.log(res);
      return this.userModel.create(res);
    },
    complete: () => subscription.unsubscribe(),

  })
    return result;
  }


  async findAllUsers() {
    let result = await this.userModel.find().exec();
    return result;
  }

  async findOneUser(id: string) {
    let result = await this.userModel.findOne({'data.id': id}).exec();
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto, token: string) {
    let result = this.http.patch(`http://localhost:80/Api/V8/module/${id}`, updateUserDto, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(map((response) => response.data));
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
