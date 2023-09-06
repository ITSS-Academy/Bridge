import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/createTask')
  create(@Body() body: any) {
    return this.tasksService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch('/update')
  update(@Body() body: any) {
    return this.tasksService.update(body.data.id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
