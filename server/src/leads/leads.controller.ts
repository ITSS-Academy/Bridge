import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService,) {}

  @Post('/createLead')
  async create(@Body() body: any) {
    return await this.leadsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.leadsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.leadsService.update(id, body);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: any) {
    return this.leadsService.remove(id);
  }
}
