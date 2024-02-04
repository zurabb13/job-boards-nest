import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';
import { Auth } from 'src/models/auth.model';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private service: AuthService) {}

  @Mutation(() => Auth)
  async createUser(@Args('data') data: AuthDto): Promise<Auth> {
    return this.service.create(data);
  }
}
