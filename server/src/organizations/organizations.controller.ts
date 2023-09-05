import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post('/createOrganization')
  create(@Body() body: any) {
    return this.organizationsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.organizationsService.update(body.data.id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }
}
