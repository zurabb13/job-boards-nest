import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JobsDto {
  @Field()
  companyName: string;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field()
  salary: number;
}
