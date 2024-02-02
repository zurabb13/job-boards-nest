import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jobs, JobsDocument } from 'src/models/jobs.model';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Jobs.name) private jobsModel: Model<JobsDocument>) {}

  async getAllJobs(): Promise<Jobs[]> {
    return await this.jobsModel.find().exec();
  }
  async getById(id: string): Promise<Jobs> {
    return this.jobsModel.findById(id).exec();
  }

  async create(body: any): Promise<Jobs> {
    return await this.jobsModel.create(body);
  }
}
