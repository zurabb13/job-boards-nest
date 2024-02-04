import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/models/users.model';
import { UsersService } from './users.service';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private service: UsersService) {}

  @Query(() => [Users])
  async getUser(): Promise<Users[]> {
    return this.service.getUsers();
  }
  @Query(() => Users)
  async getUserById(@Args('id') id: string): Promise<Users> {
    return this.service.getUsersById(id);
  }
}
