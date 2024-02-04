import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;
@ObjectType()
@Schema()
export class Users {
  @Field()
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
  company: string;

  @Field()
  @Prop()
  createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
