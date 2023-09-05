import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [HttpModule],
  controllers: [CasesController],
  providers: [CasesService, TokenService],
})
export class CasesModule {}
