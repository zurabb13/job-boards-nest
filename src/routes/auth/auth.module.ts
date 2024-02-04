import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { Auth, AuthSchema } from 'src/models/auth.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Auth.name, schema: AuthSchema, collection: 'user' },
    ]),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
