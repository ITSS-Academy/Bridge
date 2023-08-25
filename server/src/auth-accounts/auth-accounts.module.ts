import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthAccountSchema } from './schema/auth-account.schema';
import { AuthAccount } from './entities/auth-account.entity';
import { UsersModule } from 'src/users/users.module';
import { TokenService } from 'src/token/token.service';
import { HttpModule } from '@nestjs/axios';
import { AuthAccountsController } from './auth-accounts.controller';
import { AuthAccountService } from './auth-accounts.service';
@Module({
  imports: [HttpModule,UsersModule,MongooseModule.forFeature([{name: AuthAccount.name, schema: AuthAccountSchema}])], 
  controllers: [AuthAccountsController],
  providers: [AuthAccountService,TokenService],
})
export class AuthAccountModule {}
