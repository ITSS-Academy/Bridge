import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({strict: false})
export class User {

}

export const UserSchema = SchemaFactory.createForClass(User);
