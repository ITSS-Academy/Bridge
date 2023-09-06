import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthAccountService } from 'src/auth-accounts/auth-accounts.service';

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
