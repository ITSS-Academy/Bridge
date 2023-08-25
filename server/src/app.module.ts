import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { AuthAccountModule } from './auth-accounts/auth-accounts.module';
import { TokenService } from './token/token.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule,MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.tkewdqs.mongodb.net/SuiteCRM?retryWrites=true&w=majority'),
UsersModule,AuthAccountModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService, TokenService],
})
export class AppModule {}
