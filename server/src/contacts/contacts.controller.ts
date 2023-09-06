import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('/createContact')
  create(@Body() body: any) {
    return this.contactsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.contactsService.update(body.data.id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
