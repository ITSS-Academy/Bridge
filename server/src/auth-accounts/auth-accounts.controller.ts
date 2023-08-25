import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AuthAccountService } from './auth-accounts.service';
import { CreateAuthAccountDto } from './dto/create-auth-account.dto';
import { UpdateAuthAccountDto } from './dto/update-auth-account.dto';

@Controller('auth')
export class AuthAccountsController {
  constructor(private readonly authAccountService: AuthAccountService) {}

  @Post('/signup')
  async create(@Body() createAuthAccountDto: CreateAuthAccountDto) {
    try{
    let result = await this.authAccountService.create(createAuthAccountDto);
    return result;
    }catch(err){
      return new HttpException(err, 302);
    }
  }

  @Get('/getAll')
  async findAll() {
    try{
      let result = this.authAccountService.findAll();
    }catch(err){
      return new HttpException(err, 302);
    }
  }

  @Get('/find/:username')
  findOne(@Param('username') username: string) {
    return this.authAccountService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthAccountDto: UpdateAuthAccountDto) {
    return this.authAccountService.update(+id, updateAuthAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authAccountService.remove(+id);
  }
}
