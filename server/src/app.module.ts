import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { AuthAccountModule } from './auth-accounts/auth-accounts.module';
import { TokenService } from './token/token.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LeadsModule } from './leads/leads.module';
import databaseConfig from './configs/database.config';
import { TokenController } from './token/token.controller';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    MongooseModule.forRoot(databaseConfig().database.host),
    UsersModule,
    AuthAccountModule,
    AccountsModule,
    LeadsModule,
    ContactsModule,
  ],
  controllers: [AppController, TokenController],
  providers: [AppService, TokenService],
})
export class AppModule {}
