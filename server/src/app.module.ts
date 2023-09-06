import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthAccountModule } from './auth-accounts/auth-accounts.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LeadsModule } from './leads/leads.module';
import databaseConfig from './configs/database.config';
import { ContactsModule } from './contacts/contacts.module';
import { EventsModule } from './events/events.module';
import { DealsModule } from './deals/deals.module';
import { CasesModule } from './cases/cases.module';
import { TasksModule } from './tasks/tasks.module';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    MongooseModule.forRoot(databaseConfig().database.host),
    UsersModule,
    AuthAccountModule,
    LeadsModule,
    ContactsModule,
    EventsModule,
    DealsModule,
    CasesModule,
    TasksModule,
    OrganizationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
