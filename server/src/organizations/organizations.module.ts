import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule],
  controllers: [OrganizationsController],
  providers: [OrganizationsService, TokenService],
})
export class OrganizationsModule {}
