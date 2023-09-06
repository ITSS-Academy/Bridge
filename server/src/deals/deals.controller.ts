import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post('/createDeal')
  create(@Body() body:any) {
    return this.dealsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.dealsService.update(body.data.id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
