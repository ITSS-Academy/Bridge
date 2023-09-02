import { Inject, Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { TokenService } from 'src/token/token.service';
import { map } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lead } from './schema/lead.schema';

@Injectable()
export class LeadsService {

  api_url = this.configService.get<string>('CORE_APIs');
  token = '';
  subLeadInfo: any;
  constructor(private http: HttpService, 
    private configService: ConfigService, 
    private tokenService: TokenService,
    @InjectModel(Lead.name) public leadModel: Model<Lead>,
    ) {


    let result = this.tokenService.getToken();
    result.subscribe((res) => {
      this.token = res.access_token;
    });
  }

  async create(body: any) {
    let result = this.http.post(`${this.api_url}/Api/V8/module`, body, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(map((response) => response.data));
    const subscription = result.subscribe({
      next: async (res) => {
        this.subLeadInfo = await this.leadModel.create(res);
        return this.subLeadInfo;
        // console.log(this.subLeadInfo);
    },
    complete: () => {
      subscription.unsubscribe();
    },
  })
    // return result;
  }

  findAll() {
    return `This action returns all leads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lead`;
  }

  update(id: number, updateLeadDto: UpdateLeadDto) {
    return `This action updates a #${id} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}
