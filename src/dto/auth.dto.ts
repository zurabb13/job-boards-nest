import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthDto {
  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  confirmPassword: string;
}
