import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthAccountDto } from './dto/create-auth-account.dto';
import { UpdateAuthAccountDto } from './dto/update-auth-account.dto';
import { AuthAccount } from './schema/auth-account.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Md5 } from 'ts-md5';
import { UsersService } from 'src/users/users.service';
import { TokenService } from 'src/token/token.service';

const md5 = new Md5();

@Injectable()
export class AuthAccountService {
  token = '';
  constructor(
    @InjectModel(AuthAccount.name) public authModel: Model<AuthAccount>,
    public userService: UsersService,
    public tokenService: TokenService,
  ) {
    let result = this.tokenService.getToken();
    result.subscribe((res) => {
      this.token = res.access_token;
    });
  }

  async checkExisted(username: string, email: string) {
    let existedUsername = await this.authModel.findOne({ username: username }).exec();
    let existedEmail = await this.authModel.findOne({email: email}).exec();
    if(existedUsername || existedEmail){
      return true;     
    }else{
      return false;
    }
  }

  async create(createAuthAccountDto: CreateAuthAccountDto) {
    let isExist = await this.authModel
      .findOne({ username: createAuthAccountDto.username })
      .exec();
    if (isExist) {
      throw new Error('Username is existed');
    } else {
      let subPassword = createAuthAccountDto.hash_password;
      createAuthAccountDto.hash_password = await bcrypt.hash(
        createAuthAccountDto.hash_password,
        10,
      );
      let result = await this.authModel.create(createAuthAccountDto);
      let data = {
        data: {
          type: 'Users',
          attributes: {
            first_name: createAuthAccountDto.firstName,
            last_name: createAuthAccountDto.lastName,
            email1: createAuthAccountDto.email,
            user_name: createAuthAccountDto.username,
            user_hash: md5.appendStr(subPassword.toString()).end(),
          },
        },
      };
      await this.userService.createUser(data, this.token);
      console.log(result);
      return result;
    }
  }

  async checkAuth(account: any) {
    let isExisted = await this.findOne(account.username);
    if (isExisted) {
      let result = await bcrypt.compare(
        account.password,
        isExisted.hash_password,
      );
      if (result) {
        return true;
      }else{
        return false;
      }
    } else {
      return false;
    }
  }

  async login(account: any) {
    let isExisted = await this.findOne(account.username);
    if (isExisted) {
      let res = await this.userService.fineUserByEmail(isExisted.email);
      if (isExisted.id == '') {
        await this.authModel
          .findOneAndUpdate({ email: isExisted.email }, { id: res.id })
          .exec();
      }
      console.log(res);
        return isExisted;
    }
  }

  async findOne(username: string) {
    let result = await this.authModel.findOne({ username: username }).exec();
    return result;
  }

  async findAll() {
    let result = await this.authModel.find().exec();
    console.log(result);
    return result;
  }

  update(id: number, updateAuthAccountDto: UpdateAuthAccountDto) {
    return `This action updates a #${id} authAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} authAccount`;
  }
}
