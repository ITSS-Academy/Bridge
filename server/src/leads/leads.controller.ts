import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService,) {}

  @Post('/createLead')
  create(@Body() body: any) {
    return this.leadsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.leadsService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    console.log(body.data.id);
    return this.leadsService.update(body);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(id);
  }
}
