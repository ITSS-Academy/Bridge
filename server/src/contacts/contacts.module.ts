import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule],
  controllers: [ContactsController],
  providers: [ContactsService, TokenService],
})
export class ContactsModule {}
