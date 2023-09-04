import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AppService } from 'src/app.service';
import { TokenService } from 'src/token/token.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  @Get('/getAll')
  findAll() {
    return this.usersService.findAllUsers();
  }

  @Get('findById/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @Get('findByEmail/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch('update')
  update(@Body() body: any) {
    return this.usersService.update(body.data.id, body);
  }
}
