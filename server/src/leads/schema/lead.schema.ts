import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LeadDocument = HydratedDocument<Lead>;

@Schema({strict: false})
export class Lead {
    
}

export const LeadSchema = SchemaFactory.createForClass(Lead);
