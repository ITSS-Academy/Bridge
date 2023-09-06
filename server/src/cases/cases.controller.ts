import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post('/createCase')
  create(@Body() body: any) {
    return this.casesService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.casesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casesService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.casesService.update(body.data.id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.casesService.remove(id);
  }
}
