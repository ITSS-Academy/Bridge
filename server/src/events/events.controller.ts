import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('/createEvent')
  create(@Body() body: any) {
    return this.eventsService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventsService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.eventsService.update(body.data.id, body);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
