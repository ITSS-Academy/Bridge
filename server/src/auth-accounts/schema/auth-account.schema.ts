import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthAccountDocument = HydratedDocument<AuthAccount>;

@Schema()
export class AuthAccount {

    @Prop()
    id: string;
    @Prop()
    username: string;
    @Prop()
    email: string;
    @Prop()
    hash_password: string;
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    

}

export const AuthAccountSchema = SchemaFactory.createForClass(AuthAccount);
