import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule],
  controllers: [DealsController],
  providers: [DealsService, TokenService],
})
export class DealsModule {}
