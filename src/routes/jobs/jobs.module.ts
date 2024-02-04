import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Jobs, JobsSchemaFactory } from 'src/models/jobs.model';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Jobs.name, schema: JobsSchemaFactory, collection: 'data' },
    ]),
  ],
  providers: [JobsResolver, JobsService],
})
export class JobsModule {}
