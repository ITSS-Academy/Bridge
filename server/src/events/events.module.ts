import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule],
  controllers: [EventsController],
  providers: [EventsService, TokenService],
})
export class EventsModule {}
