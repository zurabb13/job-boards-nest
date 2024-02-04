import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from 'src/dto/auth.dto';
import { Auth, AuthDocument } from 'src/models/auth.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}

  async create(body: AuthDto): Promise<Auth> {
    return await this.authModel.create(body);
  }
}
