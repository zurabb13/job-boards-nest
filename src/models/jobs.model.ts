import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobsDocument = Jobs & Document;
@ObjectType()
@Schema()
export class Jobs {
  @Field()
  _id: string;

  @Field()
  @Prop()
  companyName: string;

  @Field()
  @Prop()
  img: string;

  @Field({ nullable: true })
  @Prop()
  name: string;

  @Field({ nullable: true })
  @Prop()
  position: string;

  @Field()
  @Prop()
  salary: number;

  @Field()
  @Prop()
  salaryType: string;

  @Field()
  @Prop()
  experience: string;

  @Field()
  @Prop()
  jobType: string;

  @Field()
  @Prop()
  location: string;

  @Field()
  @Prop()
  roleOverview: string;

  @Field()
  @Prop()
  description: string;

  @Field(() => [String])
  @Prop()
  skills: string[];
}

export const JobsSchemaFactory = SchemaFactory.createForClass(Jobs);
