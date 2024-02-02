import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JobsInput {
  @Field()
  companyName: string;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field()
  salary: number;
}
