import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead, LeadSchema } from './schema/lead.schema';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule,MongooseModule.forFeature([{name: Lead.name, schema: LeadSchema}])],
  controllers: [LeadsController],
  providers: [LeadsService, TokenService],
})
export class LeadsModule {}
