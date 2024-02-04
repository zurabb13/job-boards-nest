import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, Users } from 'src/models/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema, collection: 'user' },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
