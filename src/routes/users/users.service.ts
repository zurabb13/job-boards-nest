import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/models/users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async getUsers(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async getUsersById(id: string): Promise<Users> {
    return await this.usersModel.findById(id).exec();
  }
}
