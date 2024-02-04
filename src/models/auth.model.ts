import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@ObjectType()
@Schema()
export class Auth {
  @Field()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  })
  _id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  password: string;

  @Field()
  @Prop()
  confirmPassword: string;

  @Field()
  @Prop({
    type: String,
    default: new Date(),
  })
  createdAt: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
