import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HttpModule } from '@nestjs/axios';
import { TokenService } from 'src/token/token.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from './schema/user.schema';


@Module({
  imports: [HttpModule,MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService, TokenService],

  exports: [UsersService]
})
export class UsersModule {}
